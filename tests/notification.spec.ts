import { test, expect } from '@playwright/test';
import { api, strapiConnect } from './utils';
import config from '../init/config';
import { createTextChangeRange } from 'typescript';


let notificationIdeaId = 0;

test.describe('/api/notification', () => {

    test("Create new notification on idea create", async ({ request }) => {
        // Create a new IdeaCard
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

        // Capture the idea ID for this notification test 
        notificationIdeaId = newIdea.id;

        // Fetch all the noticationsa after the new Idea is created
        const notifications = await api(request).get("/api/notifications?populate=*");

        // Filter the notification related to the new idea
        const notification = notifications.data.find(
            (item) =>
                item.attributes.event.data.attributes.entityId === newIdea.id &&
                item.attributes.event.data.attributes.entityType === "IdeaCard"
        );

        // Ensure the notification exists and has correct attributes
        expect(notification).toBeDefined();
        expect(notification.attributes.event.data.attributes.action).toBe("Idea Created");
        expect(notification.attributes.event.data.attributes.content).toBe("I am testing");
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);
        expect(notification.attributes.readDateTime).toBeNull();

    });

    test("Create new notification on comment create", async ({ request }) => {
        // Create a new comment on the previously created IdeaCard
        const newComment = await api(request).post("/api/comments", {
            author: "tester2",
            idea_card: { id: notificationIdeaId },
            text: "This is a test comment"
        });
        const newCommentId = newComment.id;

        // Fetch notifications after the comment is created
        const notifications = await api(request).get("/api/notifications?populate=event,user");

        // Filter the notification related to the comment using the comment ID
        const notification = notifications.data.reverse().find(
            (item) =>
                item.attributes.event?.data?.attributes?.entityId == notificationIdeaId &&
                item.attributes.event?.data?.attributes?.originatedEntityId === newCommentId &&
                item.attributes.event?.data?.attributes?.entityType === "Comment"
        );

        // Schema Checks
        expect(notification).toBeDefined();
        expect(notification.attributes.event.data.attributes.action).toBe("Commented");
        expect(notification.attributes.event.data.attributes.content).toBe("This is a test comment");
        //expect(notification.attributes.user.data.attributes.user).toBe(config.user.username);
        expect(notification.attributes.readDateTime).toBeNull();

        // Update the notification as read and check the readDateTime
        const readDateTime = new Date().toISOString();
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
                content: 'Testing User Access to Notifications',
                entityType: "IdeaCard",
                entityId: testId,
                action: "Test",
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

        const notifications = await api(request).get("/api/notifications?populate=event,user");
        const notification = notifications.data.find(
            item => item.attributes.event.data.attributes.entityId === testId &&
                item.attributes.event.data.attributes.entityType === "IdeaCard"
        );

        // Check that the notification exists and has correct attributes
        expect(notification).toBeDefined();
        expect(notification.attributes.event.data.attributes.action).toBe('Test');
        expect(notification.attributes.event.data.attributes.content).toBe('Testing User Access to Notifications');
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);

        // Fetch the notification by its ID and check the event and user data
        const notificationById = await api(request).get(`/api/notifications/${newNotification.id}?populate=*`);
        expect(notificationById.data.attributes.event.data.attributes.action).toBe('Test');
        expect(notificationById.data.attributes.event.data.attributes.content).toBe('Testing User Access to Notifications');
        expect(notificationById.data.attributes.user.data.attributes.username).toBe(config.user.username);

    });

    test("Ensure notifications are filtered by policy", async ({ request }) => {
        const strapiInstance = await strapiConnect();
        const testId = 9999;

        const otherUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: config.user2.username }
        });

        // Create a new event with a valid action, for the other user
        const newEvent = await strapiInstance.entityService.create('api::event.event', {
            data: {
                content: 'Testing User Access to Notifications',
                entityType: "IdeaCard",
                entityId: testId,
                action: "Idea Created",  // Ensure the action is valid
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
        const notification = notifications.data.find(
            item => (item.attributes.event.data.attributes.entityId === testId && item.attributes.event.data.attributes.entityType === "IdeaCard"
            ));

        expect(notification).toBeUndefined();

        const error = await api(request).get(`/api/notifications/${newNotification.id}?populate=*`, 403);
        expect(error.error.name).toBe('ForbiddenError');

        const error2 = await api(request).get(`/api/notifications/9999?populate=*`, 404);
        expect(error2.error.name).toBe('NotFoundError');

    });
})
