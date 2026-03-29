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

      // Skip if this update is only setting invite flags (prevents infinite loop)
      const inviteFlags = ['githubInviteSent', 'discordInviteSent'];
      if (updatedFields.length > 0 && updatedFields.every(f => inviteFlags.includes(f))) {
        return;
      }

      const prevStatus = event.state?.prevStatus;
      const newStatus = result.status;

      console.log(`Comparing status change: ${prevStatus} -> ${newStatus}`);

      // Trigger only if status changed to 'signed'
      if (newStatus !== 'signed' || prevStatus === 'signed') {
        return;
      }

      // Get the full applicant record with all fields needed for invite checks
      const applicant = await strapi.entityService.findOne(
        'api::onboarding-applicant.onboarding-applicant',
        result.id,
        { fields: ['githubUsername', 'discordUsername', 'personalEmail', 'fullName', 'githubInviteSent', 'discordInviteSent'] }
      );

      // --- GitHub Invite ---
      if (!applicant.githubInviteSent && applicant.githubUsername) {
        try {
          await strapi.service('api::github-repo.github-repo').sendOrgInviteByUsername(applicant.githubUsername);
          console.log(`GitHub invite sent to @${applicant.githubUsername}`);
          await strapi.entityService.update(
            'api::onboarding-applicant.onboarding-applicant',
            result.id,
            { data: { githubInviteSent: true } }
          );
        } catch (err) {
          console.error(`Failed to send GitHub invite to @${applicant.githubUsername}:`, err.message);
        }
      } else if (!applicant.githubUsername) {
        console.warn('No GitHub username found for applicant. Skipping GitHub invite.');
      }

      // --- Discord Invite ---
      if (!applicant.discordInviteSent && applicant.personalEmail) {
        try {
          const inviteLink = await strapi.service('api::discord.discord').createServerInvite();
          console.log(`Discord invite link generated: ${inviteLink}`);

          await strapi.plugins['email'].services.email.send({
            to: applicant.personalEmail,
            subject: 'Welcome to Dev Launchers - Join our Discord!',
            text: `Hi ${applicant.fullName || 'there'},\n\nWelcome to Dev Launchers! Here is your invite link to join our Discord server:\n\n${inviteLink}\n\nThis link is single-use and expires in 7 days.\n\nSee you there!\nDev Launchers Team`,
            html: `<p>Hi ${applicant.fullName || 'there'},</p>
<p>Welcome to Dev Launchers! Here is your invite link to join our Discord server:</p>
<p><a href="${inviteLink}">${inviteLink}</a></p>
<p>This link is single-use and expires in 7 days.</p>
<p>See you there!<br/>Dev Launchers Team</p>`,
          });
          console.log(`Discord invite emailed to ${applicant.personalEmail}`);

          await strapi.entityService.update(
            'api::onboarding-applicant.onboarding-applicant',
            result.id,
            { data: { discordInviteSent: true } }
          );
        } catch (err) {
          console.error(`Failed to send Discord invite to ${applicant.personalEmail}:`, err.message);
        }
      } else if (!applicant.personalEmail) {
        console.warn('No email found for applicant. Skipping Discord invite.');
      }
    },
  };
