import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/profile', () => {
  test("Should get Profile", async ({ request }) => {
    const profiles = await api(request).getData("/api/profiles");
    const profile = profiles[0].attributes;

    expect(profile.id).toBe(config.profile.id);
    expect(profile.location).toBe(config.profile.location);
    expect(profile.role).toBe(config.profile.role);
    expect(profile.headline).toBe(config.profile.headline);
    expect(profile.website).toBe(config.profile.website);
  });
});