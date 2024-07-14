import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

let ideaId = 0;

test.describe('/api/event', () => {

    test("Create new event on idea create", async ({ request }) => {
        const newIdea = await api(request).post("/api/idea-cards", {
            ideaName: "TestEventIdea",
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
        const events = await api(request).get("/api/events");
        const event = events.data
        .find(item => (item.attributes.entityId === newIdea.id && item.attributes.entityType === "IdeaCard"));
        expect(event.attributes.title).toBe("Idea Submitted Successfully");
        expect(event.attributes.content).toBe(`${config.user.username} added new idea, Testing2 - Yay! is created`);
    });

    test("Create new event on idea update", async ({ request }) => {
        const idea = await api(request).put(`/api/idea-cards/${ideaId}`, {
            description: "Keep testing",
        });
        const events = await api(request).get("/api/events");
        const event = events.data.reverse()
        .find(item => (item.attributes.entityId === idea.id && item.attributes.entityType === "IdeaCard"));
        expect(event.attributes.title).toBe("Idea Testing2 was updated");
        expect(event.attributes.content).toBe(`${config.user.username} has updated idea Testing2`);
    });

    test("Create new event on idea stats update", async ({ request }) => {
        const idea = await api(request).put(`/api/idea-cards/${ideaId}`, {
            status: "approved",
        });
        const events = await api(request).get("/api/events");
        const event = events.data.reverse()
        .find(item => (item.attributes.entityId === idea.id && item.attributes.entityType === "IdeaCard"));
        expect(event.attributes.title).toBe("Idea Testing2 is approved");
        expect(event.attributes.content).toBe(`${config.user.username} has updated idea Testing2 - approved`);
    });

    test("Create new event on comment create", async ({ request }) => {
        await api(request).post("/api/comments", {
            idea_card: { id: ideaId },
            text: "test comment"
        });
        const events = await api(request).get("/api/events");
        const event = events.data.reverse()
        .find(item => (item.attributes.entityId === ideaId && item.attributes.entityType === "IdeaCard"));
        expect(event.attributes.title).toBe(`${config.user.username} commented on Testing2`);
        expect(event.attributes.content).toBe("test comment");
    });

    
});