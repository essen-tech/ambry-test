#!/bin/bash

MY_DIR="$(dirname $0)"

TAB=$'\t'

_red() {
    echo -e "\033[1;31m $1 \033[0m"
}

_green() {
    echo -e "\033[1;32m $1 \033[0m"
}

_blue() {
    echo -e "\033[1;34m $1 \033[0m"
}

_modified() {
    echo -e "\033[0;33m> Updated file:\033[0m\033[1;33m $1 \033[0m"
}

_confirm_line() {
  echo -e "\033[1;34m $1: \033[0m\033[1;32m $2 \033[0m"
}

# Get setup info
_get_project_data() {
  _blue "\n\nHey Gooby!\nWhat is the name of the new project?"
  read PROJECT_NAME

  _blue "\n\nDo you want to include WPML support? (y/n)"
  select yn in "Yes" "No"; do
      case $yn in
          Yes ) WPML="y"; break;;
          No ) WPML="n"; break;;
      esac
  done


  _blue "\n\nGooby, is following lines correct?"
  _confirm_line "Project name" $PROJECT_NAME

  if [ "$WPML" = "y" ]
  then
    _confirm_line "Include WPML" "Yes"
  else
    _confirm_line "Include WPML" "No"
  fi



  select yn in "Yes" "No"; do
      case $yn in
          Yes ) break;;
          No ) _red "You did not confirm. Lets try this again"; _get_project_data; break;;
      esac
  done
}

# Add a plugin with WGET
#
# param 1: plugin name
# param 2: plugin url
_add_wget_plugin() {
  WGET="wget -O /var/tmp/plugins/$1 \"$2\""
  sed -i '' -e "/WGET-PLACEHOLDER/a\\
  $WGET" "$MY_DIR/../wordpress/docker/install_wordpress.sh"
}

# Add a plugin with WGET
#
# param 1: plugin url
_add_wp_plugin() {
  sed -i '' -e "/PLUGIN-PLACEHOLDER/a\\
  $1 \\\\" "$MY_DIR/../wordpress/docker/install_wordpress.sh"
}

# Insert WPML to the setup
_insert_wpml() {
  _add_wget_plugin "wpml.zip" "https://wpml.org/?download=6088&user_id=91273&subscription_key=069e69ad610527e5dbaaec98e08de0b2&t=1561444029&version=4.2.7.1"
  _add_wp_plugin "https://github.com/shawnhooper/wpml-rest-api/archive/master.zip"

  # require wpml wordpress function file
  echo "" >> "$MY_DIR/../wordpress/themes/swace-digital/functions.php"
  echo "// Wpml" >> "$MY_DIR/../wordpress/themes/swace-digital/functions.php"
  echo "require_once 'inc/wpml-support.php';" >> "$MY_DIR/../wordpress/themes/swace-digital/functions.php"

  # Add language suffix to options
  sed -i '' -e "s/'post_id' => 'navigation'/'post_id' => 'navigation_' . ICL_LANGUAGE_CODE/g" "$MY_DIR/../wordpress/themes/swace-digital/inc/acf-options.php"

  # Add english as default option language
  sed -i '' -e "s/acfOptionPageIds: ['navigation']/acfOptionPageIds: ['navigation_en', 'navigation_sv']/g" "$MY_DIR/../gatsby-config.js"

  # Remove WPML-tags so that code isn't removed by cleanup
  sed -i '' -e "/WPML-START/d" "$MY_DIR/../src/libs/graphql/queryAll.ts"
  sed -i '' -e "/WPML-END/d" "$MY_DIR/../src/libs/graphql/queryAll.ts"

  # Replace WPML when creating pages
  sed -i '' -e "/\/\/ BASE-START/,/BASE-END/d" "$MY_DIR/../gatsby-node.js"
  sed -i '' -e "/WPML-START/d" "$MY_DIR/../gatsby-node.js"
  sed -i '' -e "/WPML-END/d" "$MY_DIR/../gatsby-node.js"



  _blue "\n\n### Setting up WPML ###\n"
  _modified "wordpress/docker/install_wordpress.sh"
  _modified "wordpress/themes/swace-digital/functions.php"
  _modified "wordpress/themes/swace-digital/inc/acf-options.php"
  _modified "gatsby-config.js"
  _modified "gatsby-node.js"
  _modified "src/libs/graphql/queryAll.ts"
}

# Removes all stuff that is only necesarry for this script to run correctly
_cleanup() {
  sed -i '' -e "/PLUGIN-PLACEHOLDER/d" "$MY_DIR/../wordpress/docker/install_wordpress.sh"
  sed -i '' -e "/WGET-PLACEHOLDER/d" "$MY_DIR/../wordpress/docker/install_wordpress.sh"

  # Remove WPML stuff
  sed -i '' -e "/WPML-START/,/WPML-END/d" "$MY_DIR/../src/libs/graphql/queryAll.ts"

  sed -i '' -e "/\/\/ WPML-START/,/WPML-END/d" "$MY_DIR/../gatsby-node.js"
  sed -i '' -e "/BASE-START/d" "$MY_DIR/../gatsby-node.js"
  sed -i '' -e "/BASE-END/d" "$MY_DIR/../gatsby-node.js"
}

_get_project_data

PROJECT_NAME_LOWER=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')


for FILE in "docker-compose.yaml" ".env" "docker/start_when_mysql_ready.sh"
do
  sed -i '' -e "s/db-headless-test/db-headless-$PROJECT_NAME_LOWER/g" "$MY_DIR/../wordpress/$FILE"
  sed -i '' -e "s/wp-headless-test/wp-headless-$PROJECT_NAME_LOWER/g" "$MY_DIR/../wordpress/$FILE"
  sed -i '' -e "s/project-name/$PROJECT_NAME_LOWER/g" "$MY_DIR/../wordpress/$FILE"

  _modified "/wordpress/$FILE"
done

if [ "$WPML" == "y" ]
then
  _insert_wpml
fi




_cleanup

_green "Setup complete!\nYou can now remove this script and init this project to a new git repo.\n\nHappy coding Gooby!\n\n"