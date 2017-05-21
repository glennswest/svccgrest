docker build -t svccgrest .
docker tag svccgrest ctl.ncc9.com:5000/svccgrest
docker push ctl.ncc9.com:5000/svccgrest
