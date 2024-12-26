import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';


test.describe('/api/interest', () => {

    test("should find interest", async ({ request }) => {
        const interests = await api(request).getData("/api/interests");
        expect(interests[0].attributes.interest).toBe(config.interests[0]);
    });

    test("should deny interest creation", async ({ request }) => {
        const result = await api(request).post("/api/interests", { interest: "new interest" }, 403);
        expect(result.error.details.dissallowedScopes[0]).toBe("api::interest.interest.create");
    });
});