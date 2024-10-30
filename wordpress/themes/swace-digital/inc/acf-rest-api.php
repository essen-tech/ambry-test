<?php

function nullify_empty($value, $post_id, $field)
{
    if (empty($value)) {
        return null;
    }

    return $value;
}

function list_empty($value, $post_id, $field)
{
    if (empty($value)) {
        return [];
    }

    return $value;
}

add_filter('acf/format_value/type=relationship', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=repeater', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=select', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=checkbox', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=post_object', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=media', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=image', 'nullify_empty', 100, 3);
add_filter('acf/format_value/type=file', 'nullify_empty', 100, 3);

add_filter('acf/format_value/type=gallery', 'list_empty', 100, 3);
add_filter('acf/format_value/type=flexible_content', 'list_empty', 100, 3);

/**
 * ACF Data in Post Object Response
 */

add_filter('acf/rest_api/recursive/types', function ($types) {
    return array_merge($types, ['attachment']);
});
