import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/profiles', () => {

    test("should show profile by id if allowed", async ({ request }) => {
        const profile = await api(request).get("/api/profiles/1?populate=*");
        expect(profile.data.id).toBe(1);
        expect(profile.data.attributes.displayName).toBe(config.user.profile.displayName);
        expect(profile.data.attributes.profilePictureUrl).toBe(config.user.profile.profilePictureUrl);
        expect(profile.data.attributes.bio).toBe(config.user.profile.bio); 
    });

    test("should not show profile details id if other", async ({ request }) => {
        const profile = await api(request).get("/api/profiles/2?populate=*");
        expect(profile.data.id).toBe(2);
        expect(profile.data.attributes.displayName).toBe(config.user2.profile.displayName);
        expect(profile.data.attributes.profilePictureUrl).toBe(config.user2.profile.profilePictureUrl);
        expect(profile.data.attributes.bio).toBeUndefined(); 
    });
});