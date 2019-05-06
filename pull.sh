# #!/bin/bash
set -e  # to stop script when error occurs

service=smokey
cwd="${PWD##*/}"

if [ $cwd != $service ]; then
  cd $service
fi

git pull origin master
docker-compose pull $service
docker run -d --name=$service unnotechpromotion/$service:latest ping google.com
docker cp $service:/usr/src/app/node_modules/. node_modules
docker rm -f $service
docker-compose start $service