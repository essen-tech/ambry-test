<?php

$swace_cpt_types = [
    // array(
    //     'type'                  => 'document', 
    //     'singular_name'         => 'Document', 
    //     'plural_name'           => 'Documents',
    //     'graphql_single_name'   => 'document',
    //     'graphql_plural_name'   => 'documents',
    //     'icon'                  => 'dashicons-media-document', 
    //     'thumbnail'             => true,
    //     'show_in_graphql'       => true,
    // ),
    array(
        'type'                  => 'recipe', 
        'singular_name'         => 'Recipe', 
        'plural_name'           => 'Recipes',
        'graphql_single_name'   => 'recipe',
        'graphql_plural_name'   => 'recipes',
        'icon'                  => 'dashicons-media-document', 
        'thumbnail'             => true,
        'show_in_graphql'       => true,
    ),
    array(
        'type'                  => 'product', 
        'singular_name'         => 'Product', 
        'plural_name'           => 'Products',
        'graphql_single_name'   => 'product',
        'graphql_plural_name'   => 'products',
        'icon'                  => 'dashicons-media-document', 
        'thumbnail'             => true,
        'show_in_graphql'       => true,
    ),
];

/**
 * Loop through the variable above to create custom post types.
 *
 * @return void
 */
function custom_post_types() {
    global $swace_cpt_types;

    $swace_default_admin_capabilities = array(
        'edit_post' => 'update_core',
        'read_post' => 'update_core',
        'delete_post' => 'update_core',
        'edit_posts' => 'update_core',
        'edit_others_posts' => 'update_core',
        'delete_posts' => 'update_core',
        'publish_posts' => 'update_core',
        'read_private_posts' => 'update_core'
    );
    
    foreach ($swace_cpt_types as $type) {
        $supports = array('title', 'editor');
        
        if (isset( $type['thumbnail'] ) && $type['thumbnail']) array_push($supports, 'thumbnail');
   
        $capabilities = isset( $type['capabilities'] ) && $type['capabilities'] == 'admin' ? $swace_default_admin_capabilities : [];
        register_post_type(
            $type['type'],
            array(
                'labels' => array(
                    'name'                  => __($type['plural_name']),
                    'singular_name'         => __($type['singular_name']),
                    'add_new'               => 'Add ' . __($type['singular_name']),
                    'add_new_item'          => 'Add ' . __($type['singular_name']),
                    'edit_item'             => 'Edit ' . __($type['singular_name']),
                    'new_item'              =>  __($type['singular_name']),
                    'view_item'             => 'View ' . __($type['singular_name']),
                    'search_items'          => 'Search ' . __($type['plural_name']),
                    'not_found'             => 'No '. __($type['plural_name']) . ' found',
                    'not_found_in_trash'    => 'No '. __($type['plural_name']) . ' found in Trash',
                    'all_items'             => 'All ' . __($type['plural_name']),
                    'menu_name'             => __($type['plural_name']),
                    'name_admin_bar'        => __($type['plural_name']),
                ),
                'public'                => true,
                'show_in_rest'          => true,
                'exclude_from_search'   => true,
                'capabilities'          => $capabilities,
                'menu_icon'             => $type['icon'],
                'menu_position'         => 11,
                'supports'              => $supports,
                'show_in_graphql'       => isset($type['show_in_graphql']) ? $type['show_in_graphql'] : false,
                'graphql_single_name'   => __($type['graphql_single_name']),
                'graphql_plural_name'   => __($type['graphql_plural_name']),

            )
        );
        remove_post_type_support($type['type'], 'editor');
    }
}

add_action('init', 'custom_post_types');