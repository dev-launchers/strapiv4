build-docker:
	docker build -t strapiv4 .

run-docker:
	docker run --env-file .env \
 	--mount type=bind,source=/Users/nerdbird/Projects/strapiv4/src,target=/srv/app/src  \
	-p 1337:1337 \
	-it strapiv4