import { test, expect, request } from '@playwright/test';
import { api } from './utils';
import config from '../init/config';

let user1Jwt, user2Jwt, notificationId;

test.describe('/api/notification policy', () => {

    test.fixme("Create new notification on idea create", async ({ request }) => {
        const newIdea = await api(request).post("/api/idea-cards", {
            ideaName: "Testing2",
            tagline: "Yay!",
            description: "I am testing",
            targetAudience: "Yes",
            features: "Yes",
            experience: "Yes",
            extraInfo: "Yes",
            involveLevel: "minimum",
            status: "workshopping",
        });
        ideaId = newIdea.id;
        const notifications = await api(request).get("/api/notifications");
        const notification = notifications.data
        .find(item => (item.attributes.entityId === newIdea.id && item.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.Title).toBe("A new idea has been created");
        expect(notification.attributes.Content).toBe("You created idea Testing2");
    });

    test.fixme("Create new notification on comment create", async ({ request }) => {
        const newComment = await api(request).post("/api/comments", {
            author: "tester2",
            idea_card: { id: ideaId },
            text: "test comment"
        });
        const notifications = await api(request).get("/api/notifications");
        const notification = notifications.data
        .find(item => (item.attributes.entityId === newComment.id && item.attributes.entityType === "Comment"));
        expect(notification.attributes.Title).toBe("tester2 commented on Testing2");
        expect(notification.attributes.Content).toBe("test comment");
    });

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
