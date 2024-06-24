import Strapi from "@strapi/strapi";
import { cleanUpDatabase } from "../init/common";

async function globalTeardown() {
    // need to keep this line, otherwise github annotations will not work
    console.log('GITHUB_WORKSPACE is set to:', process.env['GITHUB_WORKSPACE']);
    if (process.env.TEST_CONTAINER !== 'true') {
        await Strapi();
        console.log('Deleting test database...');
        await cleanUpDatabase(strapi);
    }
}

export default globalTeardown;