#! /bin/bash

# Install and activate plugins
mkdir -p /var/tmp/plugins
wget -O /var/tmp/plugins/advanced-custom-fields-pro.zip "https://connect.advancedcustomfields.com/index.php?a=download&p=pro&k=b3JkZXJfaWQ9MzYyNDJ8dHlwZT1wZXJzb25hbHxkYXRlPTIwMTQtMDctMzEgMDg6MjA6MDU="

wp plugin install --activate --force --allow-root \
https://github.com/furedal/swace-acf-placeholder/archive/1.0.0.zip \
https://github.com/humanmade/S3-Uploads/archive/2.1.0.zip \
https://downloads.wordpress.org/plugin/wordpress-seo.14.9.zip \
https://downloads.wordpress.org/plugin/wp-gatsby.0.7.2.zip \
https://github.com/wp-graphql/wp-graphql/archive/v1.0.1.zip \
https://github.com/ashhitch/wp-graphql-yoast-seo/archive/v4.5.5.zip \
https://github.com/wp-graphql/wp-graphql-acf/archive/v0.4.0.zip \
/var/tmp/plugins/*.zip
rm -rf /var/tmp/plugins

composer install -d wp-content/plugins/S3-Uploads