#! /bin/sh
echo "Starting Echo UI Dev"

## cd into the echo directory
docker exec -it echo-ui-dev /bin/sh -c "cd /echo && yarn install"
## Wget the pre-defined package.json from Github
docker exec -it echo-ui-dev /bin/sh -c "cd /echo && wget https://raw.githubusercontent.com/echo-io/echo/main/packages/echo-ui/package.json"

docker exec -it echo-ui-dev /bin/sh -c "cd /echo && yarn install"