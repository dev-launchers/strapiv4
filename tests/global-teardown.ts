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
        // need to keep this line, otherwise github annotations will not work
        console.log('GITHUB_WORKSPACE is set to:', process.env['GITHUB_WORKSPACE']);
        console.log('Skipping database cleanup because tests are running in a container');
    }
}

export default globalTeardown;