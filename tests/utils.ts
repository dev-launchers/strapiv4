import { test, expect } from '@playwright/test';
import { get } from 'http';

const api = (request) => {
    const getAndCheck = async (url) => {
        const response = await request.get(url);
        if (!response.ok()) {
            console.log(`GET ${response.url()}`);
            console.log(await response.status());
            console.log(await response.text());
        }
        expect(response.ok()).toBeTruthy();
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

        get: async (url) => {
            const data = await getAndCheck(url);
            return data;
        },

        post: async (url, payload) => {
            const response = await request.post(url, { data: { data: payload } });
            if (!response.ok()) {
                console.log(`POST ${response.url()}`);
                console.log(await response.status());
                console.log(await response.text());
            }
            expect(response.ok()).toBeTruthy();
            const data = await response.json();
            return data.data;
        }
    }
}

export { api };