<?php

function is_developer()
{
    return wp_get_current_user()->user_login === 'swace';
}

function is_localhost()
{
    return strpos($_SERVER['HTTP_HOST'], 'localhost') === 0;
}

function is_local_developer()
{
    return is_developer() && is_localhost();
}

/**
 * Remove comments from CMS
 *
 * @return void
 */
function remove_comments_functionality() {
    // // Redirect any user trying to access comments page
    global $pagenow;

    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url());
        exit;
    }

    // Disable support for comments and trackbacks in post types
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }

    // Close comments on the front-end
    add_filter('comments_open', '__return_false', 20, 2);
    add_filter('pings_open', '__return_false', 20, 2);

    // Hide existing comments
    add_filter('comments_array', '__return_empty_array', 10, 2);

    
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
}

add_action('init', 'remove_comments_functionality');

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus()
{
    register_nav_menu('header-menu', __('Header Menu', 'postlight-headless-wp'));
}
add_action('after_setup_theme', 'register_menus');

/**
 * Disable menu items.
 *
 * @return void
 */
function remove_admin_menus()
{
    remove_menu_page('edit.php');  
    remove_menu_page('edit-comments.php');   
    remove_menu_page('themes.php');
    remove_menu_page('tools.php');
    remove_submenu_page('options-general.php', 'options-writing.php');
    remove_submenu_page('options-general.php', 'options-reading.php');
    remove_submenu_page('options-general.php', 'options-discussion.php');
    remove_submenu_page('options-general.php', 'options-privacy.php');

    if (!is_developer()) {
        remove_menu_page('options-general.php');
    }

    if (!is_local_developer()) {
        remove_menu_page('plugins.php');
    }

}
add_action('admin_menu', 'remove_admin_menus');

function acf_show_admin($show)
{
    return is_developer();
}

add_filter('acf/settings/show_admin', 'acf_show_admin');
