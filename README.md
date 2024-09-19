# Return Of Documents

## Install prerequisites

Step 1 : Install Node Version Manager

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # or
        brew install nvm

        Check the version   nvm --version

Step 2 : nvm install 18.19.0

Step 3: nvm use 18.19.0

Step 4: npm i -g yarn

Step 5: touch .env
        then copy and paste the ROD secrets into this file
Step 6: yarn

Step 7: yarn run start:dev

- [Node.js](https://nodejs.org/en/) - Tested against LTS
- NPM (installed with Node.js) - Works with versions 2 and 3
- [Redis server](http://redis.io/download) running on the default port


### Database setup and integration

If this is a first-time install get postgres running on the default port and setup a new, empty local database called `acrs`.
Run [hof-rds-api](https://github.com/UKHomeOffice/hof-rds-api) locally for the acrs service. Hof-rds-api is an api that will read and write to your local database.
Follow the instructions in the [hof-rds-api README](https://github.com/UKHomeOffice/hof-rds-api/blob/master/README.md) to setup the correct configuration for your local `acrs` database and run the api in relation to acrs.

### Run ACRS

First make sure you have the hof-rds-api running for the 'acrs' service and a local database setup for it to read and write to. If not follow the steps in the [Database setup and integration](#database-setup-and-integration) section above.

Clone this repository to your local machine then:

```bash
$ cd return-of-documents
$ touch .env
$ yarn install
$ yarn start:dev
```

Then visit: [http://localhost:8080/](http://localhost:8080/) For the start page and applicant journey


