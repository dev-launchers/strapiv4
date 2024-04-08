import { request } from '@playwright/test';
const config = require('../init/config');

async function globalSetup() {
    const context = await request.newContext({
        baseURL: 'http://localhost:1337',
    });
    const response = await context.post('/api/auth/local', {
        data: {
            identifier: config.user.username,
            password: config.user.password
        }
    });
    process.env.API_TOKEN = (await response.json()).jwt;
}

export default globalSetup;