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
            author: 1,
            ideaOwner: 1,
        });
        ideaId = newIdea.id;
        const notifications = await api(request).get("/api/notifications");
        const notification = notifications.data
        .find(item => (item.attributes.entityId === newIdea.id && item.attributes.entityType === "IdeaCard"));
        expect(notification.attributes.Title).toBe("A new idea has been created");
        expect(notification.attributes.Content).toBe("You created idea Testing2");
    });

    test("Create new notification on comment create", async ({ request }) => {
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
});