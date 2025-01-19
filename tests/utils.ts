import { expect } from '@playwright/test';
import Strapi, { LoadedStrapi } from "@strapi/strapi";

let instance: LoadedStrapi;

const api = (request) => {
    const getAndCheck = async (url, expectedStatus = 200) => {
        const response = await request.get(url);
        if (response.status() !== expectedStatus) {
            console.log(`GET ${response.url()}`);
            console.log(await response.status());
            console.log(await response.text());
        }
        expect(response.status()).toBe(expectedStatus);
        return response.json();
    }

    return {
        getLast: async (url) => {
            const data = await getAndCheck(url);
            return data.data[data.data.length - 1];
        },

        getData: async (url) => {
            const data = await getAndCheck(url);
            return data.data;
        },

        get: async (url, expectedStatus = 200) => {
            const data = await getAndCheck(url, expectedStatus);
            return data;
        },

        post: async (url, payload, expectedStatus = 200) => {
            const response = await request.post(url, { data: { data: payload } });
            if (response.status() !== expectedStatus) {
                console.log(`POST ${response.url()}`);
                console.log(await response.status());
                console.log(await response.text());
            }
            expect(response.status()).toBe(expectedStatus);
            const data = await response.json();
            return expectedStatus >= 400 ? data : data.data;
        },

        put: async (url, payload, expectedStatus = 200) => {
            const response = await request.put(url, { data: { data: payload } });
            if (response.status() !== expectedStatus) {
                console.log(`PUT ${response.url()}`);
                console.log(await response.status());
                console.log(await response.text());
            }
            expect(response.status()).toBe(expectedStatus);
            const data = await response.json();
            return expectedStatus >= 400 ? data : data.data;
        },

        putRelations: async (url, relations, expectedStatus = 200) => {
            // https://docs-v4.strapi.io/dev-docs/api/rest/relations suggests payload
            // should be wrapped under "data" key once
            const response = await request.put(url, { data: relations });
            if (response.status() !== expectedStatus) {
                console.log(`PUT ${response.url()}`);
                console.log(await response.status());
                console.log(await response.text());
            }
            expect(response.status()).toBe(expectedStatus);
            const data = await response.json();
            return expectedStatus >= 400 ? data : data.data;
        }
    }
}

const strapiConnect = async () => {
    if (instance === undefined) {
        await Strapi().load();
        instance = strapi;
    }
    return instance;
}

export { api, strapiConnect };