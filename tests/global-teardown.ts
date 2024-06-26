import Strapi from "@strapi/strapi";
import { cleanUpDatabase, stopStrapi } from "../init/common";

async function globalTeardown() {
    await Strapi();
    console.log('Stopping Strapi server...');
    await stopStrapi(strapi);
    if (process.env.TEST_CONTAINER !== 'true') {
        console.log('Deleting test database...');
        await cleanUpDatabase(strapi);
    } else {
        console.log('Skipping database cleanup because tests are running in a container');
    }
}

export default globalTeardown;