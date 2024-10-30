<?php

add_action('acf/init', 'init_acf_options');

// Add a custom options page to associate ACF fields with
function init_acf_options()
{
    if( function_exists('acf_add_options_page') ) {
	
        acf_add_options_page(array(
            'page_title'	 	=> 'Footer',
            'menu_title'		=> 'Footer',
            'menu_slug' 		=> 'footer',
            'capability'		=> 'edit_posts',
            'redirect'			=> false,
            'show_in_graphql' 	=> true,
            'graphql_field_name' => 'footerSettings',
        ));	
    
        acf_add_options_page(array(
            'page_title'	 	=> 'Header',
            'menu_title'		=> 'Header',
            'menu_slug' 		=> 'header',
            'capability'		=> 'edit_posts',
            'redirect'			=> false,
            'show_in_graphql' 	=> true,
            'graphql_field_name' => 'headerSettings',
        ));	
    }
}