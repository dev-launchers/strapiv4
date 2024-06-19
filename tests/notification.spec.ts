import { test, expect, request } from '@playwright/test';
import { api } from './utils';
import config from '../init/config';

let user1Jwt, user2Jwt, notificationId;

test.describe('/api/notification policy', () => {
    test.beforeAll(async ({ request }) => {
        const apiContext = api(request);

        // Authenticate user1
        const user1LoginResponse = await apiContext.post('/api/auth/local', {
            identifier: config.user.username,
            password: config.user.password,
        });
        user1Jwt = user1LoginResponse.jwt;

        // Authenticate user2
        const user2LoginResponse = await apiContext.post('/api/auth/local', {
            identifier: config.user2.username,
            password: config.user2.password,
        });
        user2Jwt = user2LoginResponse.jwt;

        // Create a notification for user1
        const notificationResponse = await apiContext.post('/api/notifications', {
            createdDateTime: new Date().toISOString(),
            readDateTime: null,
            user: user1LoginResponse.user.id,
        });
        notificationId = notificationResponse.id;
    });

    test("Ensure notifications are filtered by policy", async ({ request }) => {
        const apiContext = api(request);

        // Fetch notifications as user1
        const user1NotificationsResponse = await request.get('/api/notifications', {
            headers: {
                Authorization: `Bearer ${user1Jwt}`,
            },
        });
        const user1Notifications = await user1NotificationsResponse.json();

        // Validate that notifications for user1 are returned
        expect(user1Notifications.data.length).toBeGreaterThan(0);
        expect(user1Notifications.data[0].id).toBe(notificationId);

        // Fetch notifications as user2
        const user2NotificationsResponse = await request.get('/api/notifications', {
            headers: {
                Authorization: `Bearer ${user2Jwt}`,
            },
        });
        const user2Notifications = await user2NotificationsResponse.json();

        // Validate that no notifications are returned for user2
        expect(user2Notifications.data.length).toBe(0);
    });
});
