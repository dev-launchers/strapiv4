import { test, expect } from '@playwright/test';
import { api } from './utils';
import { user } from '../init/config';

test.describe('/api/subscriptions', () => {
    test("Create a subscription when idea is created", async ({ request }) => {
        const newIdea = await api(request).post("/api/idea-cards", {
            ideaName: "Testing with subs 1",
            tagline: "Yay!",
            description: "I am testing",
            targetAudience: "Yes",
            features: "Yes",
            experience: "Yes",
            extraInfo: "Yes",
            involveLevel: "minimum",
            status: "workshopping",
        });

        const subscriptions = await api(request).get("/api/subscriptions");


        const subscription = subscriptions.data
            .find(item => (item.attributes.entityId === newIdea.id && item.attributes.entityType === "IdeaCard"));
        // expect(subscription.attributes.user.id).toBe(user.id);
        expect(subscription.attributes.createdDateTime).toBeDefined();
        expect(subscription.attributes.active).toBe(true);
    })
})
