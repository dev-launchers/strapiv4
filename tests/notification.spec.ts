import { test, expect } from '@playwright/test';
import { api, strapiConnect } from './utils';
import config from '../init/config';
import { createTextChangeRange } from 'typescript';


let ideaId = 0;

test.describe('/api/notification', () => {

    test("Create new notification on idea create", async ({ request }) => {
        const newIdea = await api(request).post("/api/idea-cards", {
            ideaName: "TestNotificationIdea",
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

        const notifications = await api(request).get("/api/notifications?populate=*");
        const notification = notifications.data
            .find(item => (item.attributes.event.data.attributes.entityId === newIdea.id && item.attributes.event.data.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.event.data.attributes.title).toBe("Idea Submitted Successfully");
        expect(notification.attributes.event.data.attributes.content).toBe(`${config.user.username} added new idea, TestNotificationIdea - Yay! is created`);
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);
        expect(notification.attributes.createdDateTime).not.toBeNull();
        expect(notification.attributes.readDateTime).toBeNull();
    });

    test("Create new notification on comment create", async ({ request }) => {
        const newComment = await api(request).post("/api/comments", {
            author: "tester2",
            idea_card: { id: ideaId },
            text: "test comment"
        });
        const notifications = await api(request).get("/api/notifications?populate=*");
        const notification = notifications.data.reverse()
            .find(item => (item.attributes.event.data.attributes.entityId === ideaId && item.attributes.event.data.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.event.data.attributes.title).toBe(`${config.user.username} commented on TestNotificationIdea`);
        expect(notification.attributes.event.data.attributes.content).toBe('test comment');
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);
        expect(notification.attributes.createdDateTime).not.toBeNull();
        expect(notification.attributes.readDateTime).toBeNull();

        const readDateTime = new Date(Date.now()).toISOString();
        const updatedNotification = await api(request).put(`/api/notifications/${notification.id}`, {
            readDateTime: readDateTime,
        });
        expect(updatedNotification.attributes.readDateTime).toBe(readDateTime);
    });

    test("Ensure notifications are allowed by policy", async ({ request }) => {
        const strapiInstance = await strapiConnect();
        const testId = 8888;

        const myUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: config.user.username }
        });

        const newEvent = await strapiInstance.entityService.create('api::event.event', {
            data: {
                title: 'Testing User Access to Notifications',
                content: 'Testing User Access to Notifications',
                entityType: "IdeaCard",
                entityId: testId,
                createdDateTime: new Date(),
            },
        });
        const newNotification = await strapiInstance.entityService.create("api::notification.notification", {
            data: {
                event: newEvent.id,
                createdDateTime: new Date(),
                user: myUser,
            },
        });
        const notifications = await api(request).get("/api/notifications?populate=*");
        const notification = notifications.data
            .find(item => (item.attributes.event.data.attributes.entityId === testId && item.attributes.event.data.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.event.data.attributes.title).toBe('Testing User Access to Notifications');
        expect(notification.attributes.event.data.attributes.content).toBe('Testing User Access to Notifications');
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);

        const notificationById = await api(request).get(`/api/notifications/${newNotification.id}?populate=*`);
        expect(notificationById.data.attributes.event.data.attributes.title).toBe('Testing User Access to Notifications');
        expect(notificationById.data.attributes.event.data.attributes.content).toBe('Testing User Access to Notifications');
        expect(notificationById.data.attributes.user.data.attributes.username).toBe(config.user.username);
    });

    test("Ensure notifications are filtered by policy", async ({ request }) => {
        const strapiInstance = await strapiConnect();
        const testId = 9999;

        const otherUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: config.user2.username }
        });

        const newEvent = await strapiInstance.entityService.create('api::event.event', {
            data: {
                title: 'Testing User Access to Notifications',
                content: 'Testing User Access to Notifications',
                entityType: "IdeaCard",
                entityId: testId,
                createdDateTime: new Date(),
            },
        });
        const newNotification = await strapiInstance.entityService.create("api::notification.notification", {
            data: {
                event: newEvent.id,
                createdDateTime: new Date(),
                user: otherUser,
            },
        });
        const notifications = await api(request).get("/api/notifications?populate=*");
        const notification = notifications.data
            .find(item => (item.attributes.event.data.attributes.entityId === testId && item.attributes.event.data.attributes.entityType === "IdeaCard"));
        expect(notification).toBeUndefined();

        const error = await api(request).get(`/api/notifications/${newNotification.id}?populate=*`, 403);
        expect(error.error.name).toBe('ForbiddenError');

        const error2 = await api(request).get(`/api/notifications/9999?populate=*`, 404);
        expect(error2.error.name).toBe('NotFoundError');

    });
})
