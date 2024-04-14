 # Dev Launchers Strapi Service

# Getting Started
1. Run `npm run init` first time to install dependencies and initialize your local database
2. Run `npm run develop`
3. Go to http://localhost:1337/admin using email `local-admin@devlaunchers.org` and password `W&x5ZzOMtBCVt1YAUiuSzt~5`. 

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