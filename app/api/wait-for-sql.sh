#!/bin/sh
# wait-for-sql.sh

set -e
  
host="$1"
shift
  
until MYSQL_PASSWORD=$MYSQL_PASSWORD mysql -h "$host" -U "user" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec "$@"