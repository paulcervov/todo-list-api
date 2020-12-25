# Todo List Api

This project is part of the [Todo List](https://github.com/paulcervov/todo-list) project.

## Setup and run

1. `git clone https://github.com/paulcervov/todo-list-api.git && cd todo-list-api`

2. `cp .env.example .env`

3. fill `.env` file

### Local development

`npm run start`

### Docker production build

`docker build -t todo-list-api .`

### Docker production run

```
docker run \
--name todo-list-api --rm \
-dp 4000:80 \
--env-file ./.env \
todo-list-api
```

See all [base commands](https://docs.docker.com/engine/reference/commandline/docker/).














4. `npm run start`

## Run with Docker in production

```
docker run \
--name todo-list-api --rm \
-dp 4000:4000 \
--env-file ./.env \
paulcervov/todo-list-api:latest 
```
    
To watch logs enter `docker logs -f todo-list-api`.

To stop container enter `docker stop todo-list-api`.

See all [base commands](https://docs.docker.com/engine/reference/commandline/docker/).
