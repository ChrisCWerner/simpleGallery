# Simple Gallery

This is a small project given to me to test my abilities as a developer for a job interview.

Built with ReactJS and moleculer.js and wrapped with Docker & Docker-compose for quick deployment.

## Run Locally:

To run locally you must first install all dependencies in both `client` and `images` directories.

- To install dependencies and start the web client, run inside `client`:

```
$ yarn install
$ yarn start
```

- To install dependencies and start the server, run inside `images`:

```
$ npm install
$ npm run dev
```

> Please note that you need a NATS server running to start the server. You cand download it from [here](https://nats.io/download/nats-io/nats-server/).

- Now you just need to access it on http://localhost:2000. The server will be running on port 3000.

## Run With Docker-compose

To run this project with Docker-compose, all you need is to run the following command on root:

```
$ docker-compose up
```

That's it! Now you can access it from port 3000 on your docker machine IP.
