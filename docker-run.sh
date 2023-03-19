docker build -t strapiv4 .
docker run --env-file .env \
 --mount type=bind,source="$(pwd)"/src,target=/srv/app/src  \
-p 1337:1337 \
-it strapiv4