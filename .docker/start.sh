#!/bin/bash
set -e

source ~/.profile;

echo "AUTH APP: ENVIRONMENT IS $NODE_ENV $DEVELOPMENT_MODE";

if [ $DEVELOPMENT_MODE != "local" ]; then
  echo "AUTH APP: STARTING PRODUCTION SERVER!";
  npm run --prefix /app build;
  npm run --prefix /app start;
else
  if [ ! -d /var/app/node_modules ]; then
    echo "AUTH APP: MOVING NODE MODULES!";
    mv /app/node_modules /var/app/node_modules;
    mv /app/package-lock.json /var/app/package-lock.json;
  fi

  echo "AUTH APP: STARTING DEVELOPMENT SERVER!";
  npm run --prefix /var/app dev;
fi

exec "$@"
