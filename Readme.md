This project has been bootstrapped with "Create React App"

Design is inspired by Ant Desgin.


## Docker Support

The Dockerfile has been commited alongside. 

It can be built using the following command in the root directory.

`docker build . -t weather-app-test`

The Docker image can be run using

`docker run -p 5000:5000 -p 7080:7080 weather-app-test`