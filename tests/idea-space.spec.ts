import { test, expect } from '@playwright/test';
import { api } from './utils';

let ideaId = 0;

test.describe('/api/idea-cards', () => {

    test("should add idea", async ({ request }) => {
        const newIdea = await api(request).post("/api/idea-cards", {
            ideaName: "Testing",
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
        expect(newIdea.attributes.ideaName).toBe("Testing");
        ideaId = newIdea.id;
    });

    test("should list ideas", async ({ request }) => {
        const ideas = await api(request).get("/api/idea-cards");
        let idea = ideas.data.find(item => item.id === ideaId);
        expect(idea.attributes.ideaName).toBe("Testing");

        idea = await api(request).getData(`/api/idea-cards/${ideaId}`);
        expect(idea.attributes.ideaName).toBe("Testing");
    });
});

test.describe('/api/comments', () => {

    test('should add comment', async ({ request }) => {
        const newComment = await api(request).post("/api/comments", {
            author: "tester2",
            idea_card: { id: ideaId },
            text: "test comment"
        });
        expect(newComment.attributes.text).toBe("test comment");
    });

    test("should list comments", async ({ request }) => {
        const comments = await api(request).getLast("/api/comments");
        expect(comments.attributes.text).toBe("test comment");
    });

});