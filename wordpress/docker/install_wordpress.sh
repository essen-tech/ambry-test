#!/usr/bin/env sh
set -e

# Checks if WordPress files are downloaded and installed
if wp core is-installed --allow-root
then
    echo "WordPress is already installed, exiting."
    exit
else
    wp core download --force --allow-root

    [ -f wp-config.php ] || wp config create --allow-root \
        --dbhost="$WORDPRESS_DB_HOST" \
        --dbname="$WORDPRESS_DB_NAME" \
        --dbuser="$WORDPRESS_DB_USER" \
        --dbpass="$WORDPRESS_DB_PASSWORD" \
        --extra-php <<PHP

define( 'S3_UPLOADS_BUCKET', '$S3_UPLOADS_BUCKET' );
define( 'S3_UPLOADS_KEY', '$S3_UPLOADS_KEY' );
define( 'S3_UPLOADS_SECRET', '$S3_UPLOADS_SECRET' );
define( 'S3_UPLOADS_REGION', '$S3_UPLOADS_REGION' );
define( 'S3_UPLOADS_USE_LOCAL', false );
PHP

fi


IS_SETUP_DATABASE="n"
# Checks if database is created
if wp core is-installed --allow-root
then
    echo "Database already exist, ignoring core install"
else
    IS_SETUP_DATABASE="y"
    wp core install \
        --url="$WORDPRESS_URL" \
        --title="$WORDPRESS_TITLE" \
        --admin_user="$WORDPRESS_ADMIN_USER" \
        --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
        --admin_email="$WORDPRESS_ADMIN_EMAIL" \
        --skip-email \
        --allow-root

    # Delete sample pages
    wp post delete \
        $(wp post list --post_type=page --post_status=draft --format=ids --allow-root) \
        --force \
        --allow-root

    wp post delete \
        $(wp post list --post_type=page --post_status=publish --format=ids --allow-root) \
        --force \
        --allow-root

    # Create home page
    wp post create \
        --post_type='page' \
        --post_title='Home' \
        --post_status='publish' \
        --allow-root

    # Activate theme
    wp theme activate swace-digital --allow-root

    # Cleanups
    wp option update blogdescription "$WORDPRESS_DESCRIPTION" --allow-root
    wp term update category 1 --name="Sample Category" --allow-root

fi

# Fix rest-api
wp rewrite structure "/%year%/%monthnum%/%day%/%postname%/" --hard --allow-root

# Remove default theme and plugins
wp theme delete twentyfourteen twentyfifteen twentysixteen twentyseventeen twentynineteen --allow-root
wp plugin delete akismet hello --allow-root

# Install and activate plugins
mkdir -p /var/tmp/plugins
wget -O /var/tmp/plugins/advanced-custom-fields-pro.zip "https://connect.advancedcustomfields.com/v2/plugins/download?p=pro&k=b3JkZXJfaWQ9MzYyNDJ8dHlwZT1wZXJzb25hbHxkYXRlPTIwMTQtMDctMzEgMDg6MjA6MDU=&t=5.9.9"

wp plugin install --activate --force --allow-root \
https://github.com/furedal/swace-acf-placeholder/archive/1.0.0.zip \
https://github.com/humanmade/S3-Uploads/archive/2.1.0.zip \
https://downloads.wordpress.org/plugin/wordpress-seo.17.5.zip \
https://downloads.wordpress.org/plugin/wp-gatsby.2.0.2.zip \
https://github.com/wp-graphql/wp-graphql/archive/v1.0.1.zip \
https://github.com/ashhitch/wp-graphql-yoast-seo/archive/v4.16.0.zip \
https://github.com/wp-graphql/wp-graphql-acf/archive/v1.6.7.zip \
/var/tmp/plugins/*.zip
rm -rf /var/tmp/plugins

composer install -d wp-content/plugins/S3-Uploads

# Fixes bug https://github.com/humanmade/S3-Uploads/issues/223
sed -i -e "s/add_action( 'wp_handle_sideload_prefilter'/\/\/ Comment by docker-setup: add_action( 'wp_handle_sideload_prefilter'/g" wp-content/plugins/S3-Uploads/inc/class-s3-uploads.php

if [ "$IS_SETUP_DATABASE" = "y" ]
then
    # Add dummy image
    wp media import /var/tmp/SWACE_PLACEHOLDER.png --title="SWACE_PLACEHOLDER" --allow-root

    # Sync acf fields
    wp acf sync --allow-root
fi
# Activate theme
wp theme activate swace-digital --allow-root
echo "Great. You can now log into WordPress at: $WORDPRESS_URL/wp-admin ($WORDPRESS_ADMIN_USER/$WORDPRESS_ADMIN_PASSWORD)"
