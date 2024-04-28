import { test, expect } from '@playwright/test';
import { get } from 'http';

const api = (request) => {
    const getAndCheck = async (url, status) => {
        const response = await request.get(url);
        if (response.status() !== status) {
            console.log(`GET ${response.url()}`);
            console.log(await response.status());
            console.log(await response.text());
        }
        expect(response.status()).toBe(status);
        return response.json();
    }

    return {
        getLast: async (url) => {
            const data = await getAndCheck(url, 200);
            return data.data[data.data.length - 1];
        },

        getData: async (url) => {
            const data = await getAndCheck(url, 200);
            return data.data;
        },

        get: async (url) => {
            const data = await getAndCheck(url, 200);
            return data;
        },

        getAndExpect: async (url, status) => {
            const data = await getAndCheck(url, status);
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
        },

        put: async (url, payload) => {
            const response = await request.put(url, { data: payload });
            if (!response.ok()) {
                console.log(`PUT ${response.url()}`);
                console.log(await response.status());
                console.log(await response.text());
            }
            expect(response.ok()).toBeTruthy();
            const data = await response.json();
            return data;
        }
    }
}

export { api };