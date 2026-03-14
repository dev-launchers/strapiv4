module.exports = {
    // Get the previous status before change
    async beforeUpdate(event) {
      const { where } = event.params;
      if (!where?.id) return;
      const prev = await strapi.entityService.findOne(
        'api::onboarding-applicant.onboarding-applicant',
        where.id,
        { fields: ['status'] }
      );
      event.state = { ...(event.state || {}), prevStatus: prev?.status };
    },
    // Using afterUpdate to ensure that the status is actually set to 'signed' in Strapi when the hook runs
    async afterUpdate(event) {
      const { result, params } = event; 
      const { data } = params;
      const updatedFields = Object.keys(data || {});
      if (updatedFields.length === 1 && updatedFields[0] === 'githubInviteSent') {
        return;
      }
  
      const prevStatus = event.state?.prevStatus;
      const newStatus = result.status;
  
      console.log(`Comparing status change: ${prevStatus} -> ${newStatus}`);
  
      // Trigger only if status changed to 'signed'AND invite hasn't been sent
      if (newStatus === 'signed' && prevStatus !== 'signed' && !result.githubInviteSent) {
        // Get the full applicant record
        const applicant = await strapi.entityService.findOne(
          'api::onboarding-applicant.onboarding-applicant',
          result.id,
          { fields: ['githubUsername'] }
        );
  
        const githubUsername = applicant.githubUsername;
  
        if (!githubUsername) {
          console.warn('No GitHub username found for applicant. Skipping invite.');
          return;
        }
  
        try {
          await strapi.service('api::github-repo.github-repo').sendOrgInviteByUsername(githubUsername);
          console.log(`GitHub invite sent to @${githubUsername}`);
          
          // Update githubInviteSent field 
          await strapi.entityService.update(
            'api::onboarding-applicant.onboarding-applicant',
            result.id,
            { data: { githubInviteSent: true } }
          );

        } catch (err) {
          console.error(`Failed to send GitHub invite to @${githubUsername}:`, err.message);
        }
      }
    },
    
  };
  
