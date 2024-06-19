 # Dev Launchers Strapi Service

# Getting Started
1. Use Node v20
2. Setup NVM or alternative version manager for easy updates of versions (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating, https://www.npmjs.com/package/n)
3. Run `npm run init` first time to install dependencies and initialize your local database
4. Run `npm run develop`
5. Go to http://localhost:1337/admin using email `local-admin@devlaunchers.org` and password `W&x5ZzOMtBCVt1YAUiuSzt~5`. 

# Running from Docker
Alternatively, you can run it with Docker. There are 2 make targets available to do this.
- Ensure that Docker is running. This usually means that you need to start up Docker Desktop.
- cd to the project's root directory
- `make build-docker` to build the docker container. This may take a minute.
- `make run-docker` to start up the strapiv4 server.

### **_Note_**: You do not need to do the build and run steps every time you make a change.
Once the docker container is running, the strapi server will auto-reload with your changes without having to restart the container.

Also, if the container goes down for some reason, you do not need to rebuild it again. Run `make run-docker` and it will start up again.

# Contributing
Follow the [contributing guide](./CONTRIBUTING.md)

# Release
We are using semantic versioning to tag release. Follow https://github.com/semantic-release/semantic-release#commit-message-format
to format the commit messages.

Once you are ready to create a new release, create a PR to merge main branch to release branch.

# Update Strapi Version
Go to https://github.com/strapi/strapi/releases to find the latest version, then update all `@strapi` packages in
`package.json` to this version and run `npm install`.

# Testing
To run tests, please run `npm test` or `npm run test:coverage` to include coverage report. 
With Playwright plugin installed in VSCode you can run individual suites and tests in Test Explorer.
We use Istanbul (nyc) for code coverage, using text, cobertura and lcov report formats. Istnabul is configured using `.nycrc` file.
Code Coverage plugin can be used to review non-covered code based on generated `coverage/lcov.info`.

## Integration testing with Postgres testcontainers
Within CI we run all tests with Postgres using Testcontainers.
If your test is running fine locally, but failing in CI, you can debug it locally by running `npm run test:postgres`.
there are few prerequisites:
- install docker environment using either Docker Desktop (https://www.docker.com/products/docker-desktop/) or alternatives like Podman or Colima
- setup your environment using following, if using alternatives, https://node.testcontainers.org/supported-container-runtimes/
