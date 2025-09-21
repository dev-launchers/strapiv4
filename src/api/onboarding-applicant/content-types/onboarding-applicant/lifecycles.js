module.exports = {
    // Using afterUpdate to ensure that the status is actually set to 'signed' in Strapi when the hook runs
    async afterUpdate(event) {
      const { result, params } = event; 
      const { data } = params;
  
      const prevStatus = result.status; // current status
      const newStatus = data.status;
  
      console.log("Comparing the previous status to the new status:");
      console.log("Previous status:", prevStatus);
      console.log("New status:", newStatus);
  
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
  