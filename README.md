# dadwind
An app for dads to meet up

## App Setup
Web app generated using `npm create-react-app dadwind --template=cra-template-pwa`. API created using `express --no-view api` (requires installing `express-generator` globally).

To run the app, clone this repo and at the root, run `npm install` then `npm start`

### Docker
The `web` and `api` projects have been dockerized. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) for you OS. Once installed, run the following commands to build and run each app in a container.
```sh
docker-compose up --build -d api
```
```sh
docker-compose up --build -d web
```

These won't typically be used for active development of the code being run in the container. Typically, if you're working on just one app, but require the other app to run in order to fully test the integration, you'll spin up the dependent app in a container. This will ensure the app is running as expected and intended in the deployed environment.

### TODO
See Issues.
