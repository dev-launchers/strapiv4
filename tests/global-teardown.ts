import { cleanUpDatabase } from "../init/common";

async function globalTeardown() {
    if (process.env.TEST_CONTAINER === 'true') {
        const container = global.postgresContainer;
        if (container) {
            await container.stop();
            console.log('PG container stopped');
        }
        console.log('Stopping Strapi server...');
        await global.strapiInstance.destroy();
    } else {
        console.log('Stopping Strapi and deleting test database...');
        await cleanUpDatabase(global.strapiInstance);
    }
}

export default globalTeardown;