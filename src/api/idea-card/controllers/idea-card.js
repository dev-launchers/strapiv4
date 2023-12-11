'use strict';

/**
 *  idea-card controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::idea-card.idea-card', ({ strapi }) => ({
    // Method 3 of https://docs.strapi.io/dev-docs/backend-customization/controllers#adding-a-new-controller
    async findOne(ctx) {
        // to throw an error on query params that are invalid or the user does not have access to
        await this.validateQuery(ctx);

        const sanitizedQueryParams = await this.sanitizeQuery(ctx);
        const result = await strapi.service('api::idea-card.idea-card').findOne(ctx.params.id, sanitizedQueryParams);
        const sanitizedResult = await this.sanitizeOutput(result, ctx);

        const author = await sanitizeUser(result.author);
        const owner = await sanitizeUser(result.ideaOwner);

        sanitizedResult.author = author;
        sanitizedResult.owner = owner;

        return sanitizedResult
    },
}));

async function sanitizeUser(user) {
    if (user) {
        if (!user.profile) {
            const profiles = await strapi.service('api::profile.profile').find({
                user: user.id
            });
            if (profiles?.results.length > 0) {
                user.profile = profiles?.results[0];
            }
        }
        return {
            id: user.id,
            profile: {
                profilePictureUrl: user.profile?.profilePictureUrl,
                displayName: user.profile?.displayName,
            }
        }
    }
}