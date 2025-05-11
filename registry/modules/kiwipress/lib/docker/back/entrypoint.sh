#!/bin/bash
set -e

# Wait for DB
until mysqladmin ping -h"$WORDPRESS_DB_HOST" --silent; do
  echo "Waiting for DB..."
  sleep 2
done

# Run WP install (only if not installed yet)
if ! wp core is-installed --path=/var/www/html; then
  wp core install \
    --url="http://localhost:6009" \
    --title="KiwiPress API" \
    --admin_user=admin \
    --admin_password=admin \
    --admin_email=admin@example.com \
    --skip-email \
    --path=/var/www/html

  wp rewrite structure '/%postname%/' --hard
  wp rewrite flush --hard

  # Enable CORS via .htaccess (Apache-specific)
  echo "
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin \"*\"
  Header set Access-Control-Allow-Methods \"GET, POST, OPTIONS, PUT, DELETE\"
  Header set Access-Control-Allow-Headers \"Origin, X-Requested-With, Content-Type, Accept, Authorization\"
</IfModule>
" >> /var/www/html/.htaccess

  # Install REST helper plugin
  wp plugin install wp-rest-api-controller --activate

  # Optional: activate blank headless theme
  # wp theme install https://github.com/10up/headless-wp-starter/archive/refs/heads/develop.zip --activate
fi

# Start Apache
exec apache2-foreground
