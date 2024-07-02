import { request } from '@playwright/test';
import { bootstrapDatabase } from '../init/common';
import config from '../init/config';
import { PostgreSqlContainer } from '@testcontainers/postgresql';

async function globalSetup() {
    process.env.NODE_ENV = 'test';
    process.env.FRONTEND_URL = 'not_used';

    if (process.env.TEST_CONTAINER === 'true') {
        const container = await new PostgreSqlContainer().start();
        console.log(`PG container started on port ${container.getPort()}`);
        process.env.DATABASE_PORT = container.getPort().toString();
        global.postgresContainer = container;
    }

    console.log('Bootstrapping test database...');
    const strapiInstance = await bootstrapDatabase();
    await strapiInstance.listen();
    global.strapiInstance = strapiInstance;

    const context = await request.newContext({
        baseURL: 'http://localhost:1337',
    });
    const response = await context.post('/api/auth/local', {
        data: {
            identifier: config.user.username,
            password: config.user.password
        }
    });
    const session = await response.json();
    process.env.API_TOKEN = session.jwt;
    process.env.USER_ID = session.user.id;
}

export default globalSetup;