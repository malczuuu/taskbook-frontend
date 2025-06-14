# Taskbook Frontend

Frontend for Taskbook application. Developed by Damian Malczewski as a project at
[Cracow University of Technology][pk.edu.pl] in 2019.

Afterwards it served the purpose of testing Angular updates.

## Table of Contents

- [Building Docker image](#building-docker-image)
- [Running on local machine](#running-on-local-machine)
- [Project repositories](#project-repositories)

## Building Docker image

Building Docker automatically builds Angular distribution in a multi-stage build.

```bash
docker build -t taskbook-frontend:latest .
```

## Running on local machine

Running locally requires [`taskbook` backend application][[taskbook]] (along with its own
dependencies) to be up and running. Angular development server launches a reverse-proxy for `/api`
paths. Follow [backend instructions][taskbook-running] to launch it.

To run Angular development server use `start` npm task.

```shell
npm start
```

The application will be available on [`http://localhost:26161`](http://localhost:26161).

**Note**, that as a Docker service, the application works as a [nginx][nginx] server, available on
port `:80`.

## Project repositories

- [`taskbook`][taskbook], which holds backend application.
- [`taskbook-frontend`][taskbook-frontend], which holds frontend application.

[pk.edu.pl]: https://pk.edu.pl
[taskbook]: https://github.com/malczuuu/taskbook
[taskbook-running]: https://github.com/malczuuu/taskbook#running-on-local-machine
[taskbook-frontend]: https://github.com/malczuuu/taskbook-frontend
[nginx]: https://hub.docker.com/_/nginx
