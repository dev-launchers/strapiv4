import Strapi from "@strapi/strapi";
import { cleanUpDatabase } from "../init/common";

async function globalTeardown() {
    await Strapi();
    console.log('Deleting test database...');
    await cleanUpDatabase(strapi);
}

export default globalTeardown;