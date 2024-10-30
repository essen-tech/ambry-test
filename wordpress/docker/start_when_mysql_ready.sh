#!/usr/bin/env sh

set -e

mysql_ready='nc -z db-headless-wholesum 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

docker_start