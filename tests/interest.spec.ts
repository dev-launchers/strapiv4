import { test, expect } from '@playwright/test';
import { api, strapiConnect } from './utils';
import * as config from '../init/config';


let interestId = 0;
test.describe('/api/interest', () => {

    test("should find interest", async ({ request }) => { 
        const interests = await api(request).getData("/api/interests");
        interestId = interests[0].id;
        expect(interests[0].attributes.interest).toBe(config.interests[0]);
    });

    test("should add user interest", async ({ request }) => {
        await api(request).put("/api/users/1", { interests: [{ id: interestId }] });
        const user = await api(request).get("/api/users/me?populate=*");
        expect(user.interests.length).toBe(1);
        expect(user.interests[0].interest).toBe(config.interests[0]);
    });
});