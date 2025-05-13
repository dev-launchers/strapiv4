module.exports = {
    async beforeUpdate(event) {
      const { data, where } = event.params;
  
      // Trigger only if docuSign status is being updated to 'signed'
      if (data.docuSign === 'signed') {
        // Get the full member record
        const member = await strapi.entityService.findOne('api::member.member', where.id, {
          fields: ['github'],
        });
        // Get github Username
        const githubUsername = member?.github;
  
        if (!githubUsername) {
          console.warn('No GitHub username found for member. Skipping invite.');
          return;
        }
  
        try {
          await strapi
            .service('api::github-repo.github-repo')
            .sendOrgInviteByUsername(githubUsername);
  
          console.log(`GitHub invite sent to @${githubUsername}`);
        } catch (err) {
          console.error(`Failed to send GitHub invite to @${githubUsername}:`, err.message);
        }
      }
    }
  };
  