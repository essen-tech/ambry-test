<?php

/**
 * Placeholder function for determining the frontend origin.
 *
 * @TODO Determine the headless client's URL based on the current environment.
 *
 * @return str Frontend origin URL, i.e., http://localhost:3000.
 */

function get_frontend_main_origin()
{
    return 'https://test.swace.se';
}

function get_frontend_cors_origins()
{
    return ['http://localhost:8000', get_frontend_main_origin()];
}
