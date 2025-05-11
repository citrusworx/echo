<?php
/*
Plugin Name: Activate Headless Mode
Description: A plugin to enable headless mode by disabling WordPress's default front end.
Version: 1.0
Author: Drew Winkles
* Requires at Least: 5.2
* Requires PHP:      7.2
* Author URI:        https://github.com/stinklewinks/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Tested Up To:      6.6.2
*/


add_action('template_redirect' ,'activate_headless_mode');

function activate_headless_mode(){
    if(!is_admin()){
        wp_redirect(site_url('/404'));
        exit();
    }
}

add_filter('template_include', 'deactivate_theme_for_headless_mode', 99);

function deactivate_theme_for_headless_mode(){
    if(!is_admin()){
        return dirname(__FILE__) . '/blank-template.php';
    }
    return $template;
}

add_filter('rest_authentication_errors', function($result){
        if(!empty($restult)){
            return $result;
        }
        return null;
});

add_filter('show_admin_bar', '__return false');