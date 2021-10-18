# GasNow 2

Clone of gasnow.org

Server side of the app is [here](https://github.com/plopezlpz/gasnow2)

## Quick start

```bash
# install dependencies
yarn install
# start
yarn start
```

## env variables
The app needs the following env variables

```.env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WS_URL=ws://localhost:5000/ws
```

## Build with Docker

```bash
# build
docker build --env-file=.env -t gasnow2-ui .
# run
docker run -p3000:3000 --name gasnow2-ui gasnow2-ui
```
