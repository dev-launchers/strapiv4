import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/users', () => {

    test("should show user me", async ({ request }) => {
        const user = await api(request).get("/api/users/me?populate=*");
        expect(user.username).toBe(config.user.username);
        expect(user.email).toBe(config.user.email);
        expect(user.confirmed).toBe(config.user.confirmed);
        expect(user.projects.length).not.toBe(0);
        const project = user.projects[0];
        expect(project.slug).toBe("dev-recruiting");
        expect(user.interests.length).toBe(1);
        const interest = user.interests[0];
        expect(interest.interest).toBe(config.interests[0]);
        expect(user.professionalRole.category).toBe(config.user.professionalRole.category);
        expect(user.professionalRole.name).toBe(config.user.professionalRole.name);
    });

    test("should show user by id if allowed", async ({ request }) => {
        const user = await api(request).get("/api/users/1");
        expect(user.username).toBe(config.user.username);
        expect(user.email).toBe(config.user.email);
        expect(user.confirmed).toBe(config.user.confirmed);
    });

    test("should not show user details id if other", async ({ request }) => {
        const user = await api(request).get("/api/users/2?populate=profile");
        expect(user.username).toBe(config.user2.username);
        expect(user.email).toBeUndefined();
        expect(user.confirmed).toBeUndefined();
        expect(user.profile.profilePictureUrl).toBe(config.user2.profile.profilePictureUrl);
        expect(user.profile.displayName).toBe(config.user2.profile.displayName);
        expect(user.profile.bio).toBeUndefined();
    });
});