<?php
/**
 * Setup cors
 */
add_action( 'rest_api_init', function () {

    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

    add_filter( 'rest_pre_serve_request', function ( $value ) {

        $http_origin = $_SERVER['HTTP_ORIGIN'];
        foreach(get_frontend_cors_origins() as $origin) {
            if ($http_origin === $origin) {
                header("Access-Control-Allow-Origin: $origin");
                break;
            }
        }

        header( 'Access-Control-Allow-Methods: GET, POST' );
        header( 'Access-Control-Allow-Credentials: true' );
        header( 'Access-Control-Allow-Headers: cache-control, content-type, x-wp-nonce'); 
        return $value;
    });
}, 15 );
