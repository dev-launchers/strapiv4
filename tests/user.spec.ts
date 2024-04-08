import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

let ideaId = 0;

test.describe('/api/users', () => {

    test("should show user me", async ({ request }) => {
        const user = await api(request).get("/api/users/me?populate=*");
        expect(user.username).toBe(config.user.username);
        expect(user.email).toBe(config.user.email);
        expect(user.confirmed).toBe(config.user.confirmed);
        expect(user.projects.length).toBe(1);
        const project = user.projects[0];
        expect(project.slug).toBe("dev-recruiting");
        expect(user.interests.length).toBe(1);
        const interest = user.interests[0];
        expect(interest.interest).toBe("Python");
    });
});