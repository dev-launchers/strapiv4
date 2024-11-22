import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

let ideaId = 0;

test.describe('/api/event', () => {

    test("Create new event on idea create", async ({ request }) => {
        // Create Test Idea
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
        // Get the Idea Id for testing
        ideaId = newIdea.id;
        // Get all the events
        const events = await api(request).get("/api/events");
        // Filter the event related to the newly created Idea
        const event = events.find(item => (item.entityId === ideaId && item.entityType === "IdeaCard")); 

        // Schema Checks
        expect(event).toBeDefined(); // Ensure the event exists
        expect(event.action).toBe('Idea Created'); // Check the action
        expect(event.entityName).toBe('TestEventIdea'); // Check the entity name
        expect(event.content).toBe("I am testing"); // Check the content matches the expected format
        expect(event.entityType).toBe('IdeaCard'); // Ensure entity type is correct
        expect(event.entityId).toBe(newIdea.id); // Ensure the entityId matches the newly created idea
        expect(event.eventUser.username).toBe(config.user.username); // Check the eventUser is the idea creator

    });

    test("Create new event on idea update", async ({ request }) => {
        // Update the Idea
        const idea = await api(request).put(`/api/idea-cards/${ideaId}`, {
            description: "Keep testing",
        });
        // Get all the events
        const events = await api(request).get('/api/events');
        // Filter the events for the one related to the recently updated Idea
        const event = events.reverse().find(item => (item.entityId === idea.id && item.entityType === 'IdeaCard'));

        // Schema Checks
        expect(event).toBeDefined(); // Check that the event exists
        expect(event.action).toBe('Idea Updated'); // Check the action
        expect(event.entityName).toBe('TestEventIdea'); // Check the entity name
        expect(event.content).toBe("I am testing"); // Check the content

    });

    test("Create new event on idea stats update", async ({ request }) => {
        // Update the status of the idea
        const updatedIdea = await api(request).put(`/api/idea-cards/${ideaId}`, {
            status: "approved",
        });

        // Fetch all events
        const events = await api(request).get("/api/events");

        // Find the event related to the updated idea status
        const event = events.reverse().find(item => (item.entityId === updatedIdea.id && item.entityType === 'IdeaCard'));

        // Schema Checks
        expect(event).toBeDefined(); // Ensure the event exists
        expect(event.action).toBe('Idea Updated'); // Check the action
        expect(event.entityName).toBe('TestEventIdea'); // Check the entity name
        expect(event.content).toBe("I am testing"); // Check the content format
    });

    test("Create new event on comment create", async ({ request }) => {
        // Create a new comment on the existing idea
        const newComment = await api(request).post("/api/comments", {
            idea_card: { id: ideaId },  // Associate the comment with the created idea
            text: "This is a test comment",  // Comment content
        });
        const newCommentId = newComment.id;

        // Fetch the events after the comment is created
        const events = await api(request).get("/api/events");

        // Filter the event related to the newly created comment
        const event = events.reverse().find(item => (item.entityId === newCommentId && item.entityType === "Comment"));

        // Schema Checks
        expect(event).toBeDefined();  // Ensure the event exists
        expect(event.action).toBe('Commented');  // Check the action is "Commented"
        expect(event.entityName).toBe('This is a test comment');  // The entityName should be the comment text
        expect(event.content).toBe("This is a test comment");  // Check the event content
        expect(event.entityType).toBe('Comment');  // Ensure the entityType is "Comment"
        expect(event.entityId).toBe(newCommentId);  // The entityId should be the ideaId related to the comment
        expect(event.eventUser.username).toBe(config.user.username);  // Check the eventUser is the comment author
    });

});