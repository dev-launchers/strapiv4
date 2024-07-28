## Backend 

#### Start App
1. Use Node v20

2. Setup NVM or alternative version manager for easy updates of versions (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating, https://www.npmjs.com/package/n)

3. Run `npm run init` first time to install dependencies and initialize your local database

4. Run `npm run develop`

5. Go to http://localhost:1337/admin and login using email `local-admin@devlaunchers.org` and password is `W&x5ZzOMtBCVt1YAUiuSzt~5`.

#### Init command will do the following

1. Runs NPM Install

2. Builds Strapi Admin UI

3. Set up default environment file into `.env`

4. Starts up Strapi to allow database initialized

5. Enables Google provider using test app client id and secret.

6. Setup Authenticated and Public role permissions.

7. Creates new Strapi admin account.

8. Creates default interests and projects


## FrontEnd

FrontEnd is available in our DevLaunchers Platform repository. 
Please clone it using `git clone https://github.com/dev-launchers/dev-launchers-platform.git`.

#### Start App
1. Update `env.development` to point to local backend

```properties
NEXT_PUBLIC_API_BASE_URL=http://localhost:1337
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
NEXT_PUBLIC_GOOGLE_AUTH_URL=http://localhost:1337/api/connect/google
```

2. Install dependencies: `yarn install`

3. Run the tailwindcss compiler: `yarn workspace @devlaunchers/tailwind dev`

4. Run the app's development server: `yarn workspace @devlaunchers/app dev`

4. Go to http://localhost:3000 and sign up using your Google account

5. After login, you should be able reproduce the steps from UI perspective


# Additional Handy Commands

`npm run init:db` -  removes project database and will setup all data again without reloading dependencies and no admin UI rebuild.
`npm run init:permissions` - synchronizes only role permissions from init folder. This is useful for staging and production deployment to allow keep permissions in sync.
