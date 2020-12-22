# Todo List Api

This project is part of the [Todo List](https://github.com/paulcervov/todo-list) project.

## Setup and run local

1. `git clone https://github.com/paulcervov/todo-list-api.git && cd todo-list-api`

2. `cp .env.example .env`

3. fill `.env` file

4. `npm run start`

### Setup and run with Docker

1. `git clone https://github.com/paulcervov/todo-list-api.git && cd todo-list-api`

2. `cp .env.example .env`

3. fill `.env` file

4. ```
    docker run \
    --name todo-list-api --rm \
    -dp 4000:4000 -w /app \
    -v "$(pwd)/src:/app/src" \
    -v "$(pwd)/package.json:/app/package.json" \
    -v "$(pwd)/package-lock.json:/app/package-lock.json" \
    --env-file $(pwd)/.env \
    node:12-alpine sh -c "npm ci --production && \
        node src/index.js"
    ```
5. `docker logs -f todo-list-api`

See all [base commands](https://docs.docker.com/engine/reference/commandline/docker/).

