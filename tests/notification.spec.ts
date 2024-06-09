import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

let ideaId = 0;

test.describe('/api/notification', () => {

    test("Create new notification on idea create", async ({ request }) => {
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

        const notifications = await api(request).get("/api/notifications?populate=*");
        const notification = notifications.data
        .find(item => (item.attributes.event.data.attributes.entityId === newIdea.id && item.attributes.event.data.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.event.data.attributes.title).toBe("Idea Submitted Successfully");
        expect(notification.attributes.event.data.attributes.content).toBe(`${config.user.username} added new idea, Testing2 - Yay! is created`);
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
        expect(notification.attributes.event.data.attributes.title).toBe(`${config.user.username} commented on Testing2`);
        expect(notification.attributes.event.data.attributes.content).toBe('test comment');
        expect(notification.attributes.user.data.attributes.username).toBe(config.user.username);
        expect(notification.attributes.createdDateTime).not.toBeNull();
        expect(notification.attributes.readDateTime).toBeNull();
    });
});