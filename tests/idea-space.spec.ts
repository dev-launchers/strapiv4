import { test, expect } from '@playwright/test';
import { api, strapiConnect } from './utils';
import { user } from '../init/config';
import migrateComments from '../src/migrators/comments';

let ideaId = 0;
let commentId = 0;

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
        expect(idea.attributes.author).toBeUndefined();
        expect(idea.attributes.ideaOwner).toBeUndefined();
    });

    test("should give error for invalid idea", async ({ request }) => {
        const response = await api(request).get("/api/idea-cards/undefined", 400);
        expect(response.error.message).toBe('Id should be a number');
    });
});

test.describe('/api/comments', () => {

    test('should add comment', async ({ request }) => {
        const newComment = await api(request).post("/api/comments", {
            idea_card: { id: ideaId },
            text: "test comment"
        });
        commentId = newComment.id;
        const comment = await api(request).getData(`/api/comments/${commentId}`);
        expect(comment.attributes.text).toBe("test comment");
    })

});

test.describe('user details access', () => {

    test("should not allow access to most of user fields", async ({ request }) => {
        const idea = await api(request).getData(`api/idea-cards/${ideaId}?populate[ideaOwner][populate]&populate[author][populate]&populate[comments][populate][user][populate]=profile`);
        const commentUser = idea.attributes.comments.data[0].attributes.user.data.attributes;
        expect(commentUser.username).toBe(user.username);
        expect(commentUser.email).toBeUndefined();
        expect(commentUser.job).toBeUndefined();
        expect(commentUser.discordUsername).toBeUndefined();
        const profile = commentUser.profile.data;
        expect(profile.id).toBe(1);
        expect(profile.attributes.profilePictureUrl).toBe(user.profile.profilePictureUrl);
        expect(profile.attributes.displayName).toBe(user.profile.displayName);
        expect(profile.attributes.bio).toBeUndefined();
    });

});


/*
test.describe('/api/comments', () => {

    test('should add comment', async ({ request }) => {
        const newComment = await api(request).post("/api/comments", {
            idea_card: { id: ideaId },
            text: "test comment"
        });
        commentId = newComment.id;
        expect(newComment.attributes.text).toBe("test comment");
    });

    test("should list comments", async ({ request }) => {
        const comment = await api(request).getLast("/api/comments");
        expect(comment.attributes.text).toBe("test comment");
        expect(comment.attributes.author).toBe(user.username);
        expect(comment.attributes.user).toBeUndefined();
    });

});

test.describe('comment migration', () => {

    test("should update comment author", async () => {
        const strapi = await strapiConnect();
        const params = { where: { id: commentId }, populate: ["user"] };
        await strapi.db.query("api::comment.comment").update({ where: { id: commentId }, data: { user: null } });
        let comment = await strapi.db.query("api::comment.comment").findOne(params);
        expect(comment.user).toBeNull();
        await migrateComments(strapi);
        comment = await strapi.db.query("api::comment.comment").findOne(params);
        expect(comment.text).toBe("test comment");
        expect(comment.author).toBe(user.username);
        expect(comment.user.username).toBe(user.username);
    });

});
*/