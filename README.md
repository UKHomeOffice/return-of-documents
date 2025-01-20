# Return Of Documents

## Install prerequisites

Step 1 : Install Node Version Manager

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        brew install nvm

        Check the version   nvm --version

Step 2 : nvm install 20.0.0

Step 3: nvm use 20.0.0

Step 4: npm i -g yarn

Step 5: touch .env
        then copy and paste the ROD secrets into this file
Step 6: yarn

Step 7: yarn run start:dev

- [Node.js](https://nodejs.org/en/) - Tested against LTS
- NPM (installed with Node.js) - Works with versions 2 and 3
- [Redis server](http://redis.io/download) running on the default port


### Run ROD


```bash
$ cd return-of-documents
$ touch .env
$ yarn install
$ yarn start:dev
```

Then visit: [http://localhost:8080/](http://localhost:8080/) For the start page and applicant journey

## Install & Run the Application locally with Docker Compose

You can containerise the application using [Docker](https://www.docker.com). The `.devcontainer` directory includes a `docker-compose.dev.yml` file for orchestrating multi-container application.

### Prerequisites
   - [Docker](https://www.docker.com)

### Setup

By following these steps, you should be able to install and run your application using a Docker Compose. This provides a consistent development environment across different machines and ensures that all required dependencies are available.

1. Make sure you have Docker installed and running on your machine. Docker is needed to create and manage your containers.

2. To configure your dev environment, copy `/.devcontainer/devcontainer.env.sample` to `devcontainer.env` in the same directory and fill in the necessary values. This ensures your development container is set up with the required environment variables.

3. Open a terminal, navigate to the project directory and run: `docker compose -f .devcontainer/docker-compose.dev.yml up -d`

4. Once the containers are built and started, you can go inside the app container: `docker exec -it devcontainer-hof-rod-app-1 sh` (note: Docker containers may be named differently)

5. Run the necessary commands to install dependencies `yarn` and `yarn start:dev` to start your application.

## Install & Run the Application locally with VS Code Dev Containers

Alternatively, if you are using [Visual Studio Code](https://code.visualstudio.com/) (VS Code), you can run the application with a [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers).

The `.devcontainer` folder contains the necessary configuration files for the devcontainer.

### Prerequisites
   - [Docker](https://www.docker.com)
   - [VS Code Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension

   ### Setup

By following these steps, you should be able to run your application using a devcontainer in VS Code. The Dev Containers extension lets you use a Docker container as a full-featured development environment. This provides a consistent development environment across different machines and ensures that all required dependencies are available. A `devcontainer.json` file in this project tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack.

1. Make sure you have Docker installed and running on your machine. Docker is needed to create and manage your containers.

2. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code. This extension allows you to develop inside a containerised environment.

3. To configure your dev environment, copy `/.devcontainer/devcontainer.env.sample` to `devcontainer.env` in the same directory and fill in the necessary values. This ensures your development container is set up with the required environment variables.

4. Run the `Dev Containers: Open Folder in Container...` command from the Command Palette (F1) or click on the Remote Indicator (≶) in the status bar. This command will build and start the devcontainer based on the configuration files in the `.devcontainer` folder.

7. Once the devcontainer is built and started, you will be inside the containerised environment. You can now work on your project as if you were working locally, but with all the necessary dependencies and tools installed within the container.

8. To start the application, open a terminal within VS Code by going to `View -> Terminal` or by pressing `Ctrl+backtick` (`Cmd+backtick` on macOS). In the terminal, navigate to the project directory if you're not already there.

9. Run the necessary commands to install dependencies `yarn` and `yarn start:dev` to start your application.













