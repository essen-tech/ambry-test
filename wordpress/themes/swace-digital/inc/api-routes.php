<?php
date_default_timezone_set('Europe/Stockholm');
/**
 * Register custom REST API routes.
 */
add_action(
    'rest_api_init',
    function () {
        register_rest_route('swace/v1', '/sendContactForm', [
            'methods' => 'POST',
            'callback' => 'sendContactForm',
        ]);
    }
);

if ( ! function_exists('debug_wpmail') ) :

	function debug_wpmail( $result = false ) {

		if ( $result )
			return;

		global $ts_mail_errors, $phpmailer;

		if ( ! isset($ts_mail_errors) )
			$ts_mail_errors = array();

		if ( isset($phpmailer) )
			$ts_mail_errors[] = $phpmailer->ErrorInfo;

		print_r('<pre>');
		print_r($ts_mail_errors);
		print_r('</pre>');
	}
endif;

function sendContactForm(WP_REST_Request $request)
{
    $body = $request->get_body_params();
    if (empty($body['_deny'])) {
        $headers = array('Content-Type: text/html; charset=UTF-8');

        $body = filter_contactform_params($body, ['toEmail', 'name', 'email', 'textarea']);

        $subject = 'Wholesum - Contact Form';
        $to = $body['toEmail'];
        $time = date("Y-m-d H:i:s");
        $name = $body['name'];
        $email = $body['email'];
        $text = $body['textarea'];

        $message = format_message($time, $name, $email, $text);
        var_dump($message);

        $sent = wp_mail($to, $subject, $message, $headers);
        var_dump($sent);
        debug_wpmail($sent);
    }

    if ($sent) return new WP_REST_Response(null, 204);
    else return new WP_REST_Response(null, 400);
}

function filter_contactform_params($params, $allowed)
{
    return array_filter(
        $params,
        function ($key) use ($allowed) {
            return in_array($key, $allowed);
        },
        ARRAY_FILTER_USE_KEY
    );
}

function format_message($time, $name, $email, $text)
{
    $message = "This is a message from the contact form.<br><br><b> The customer's message: </b><br><br>";
    if (empty($text)) {
        $message .= "The customer didn't leave any message. <br><br>";
    } else {
        $message .= $text . "<br><br>";
    }
    $message .= "Contact info: <br>";
    $message .= "Name: " . $name;
    $message .= "E-mail: " . $email;
    $message .= "<br><br><i> Sent " . $time . ", <br>";

    return $message;
}



function acf_name_to_key($params, $post_type)
{
    $group = acf_get_field_groups(array('post_type' => $post_type))[0];
    $fields = acf_get_fields($group['key']);

    $result = [];
    foreach ($params as $name => $value) {
        $key = null;
        foreach ($fields as $field) {
            if ($field['name'] === $name) {
                $key = $field['key'];
            }
        }
        if ($key) {
            $result[$key] = $value;
        }
    }
    return $result;
}

function filter_params($params, $allowed)
{
    return array_filter(
        $params,
        function ($key) use ($allowed) {
            return in_array($key, $allowed);
        },
        ARRAY_FILTER_USE_KEY
    );
}
