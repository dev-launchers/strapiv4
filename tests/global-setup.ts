import { request } from '@playwright/test';
import { bootstrapDatabase } from '../init/common';
import config from '../init/config';

async function globalSetup() {
    process.env.NODE_ENV = 'test';
    process.env.PLAYWRIGHT = 'true';

    console.log('Bootstrapping test database...');
    await bootstrapDatabase();
    
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