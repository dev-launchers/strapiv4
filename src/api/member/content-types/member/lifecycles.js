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
    },

    async beforeUpdate(event) {
      const { data, where } = event.params;

      if (data.docuSign === 'signed') {
        const member = await strapi.entityService.findOne('api::member.member', where.id, {
          fields: ['discord', 'personalEmail', 'firstName'],
        });

        if (!member.discord) {
          console.warn(`Skipping Discord invite: No Discord username for member ID ${where.id}`);
          return;
        }

        if (!member.personalEmail) {
          console.warn(`Skipping email: No personalEmail for member ID ${where.id}`);
          return;
        }

        try {
          // Send Discord invite
          const invite = await strapi
            .service('api::github-repo.discord-manager')
            .sendInvite();

          // Send email with invite link
          await strapi.plugins['email'].services.email.send({
            to: member.personalEmail,
            subject: 'Your Invite to Our Discord Server',
            text: `Hi ${member.firstName || 'there'},\n\nYou're invited to join our Discord community!\n\nJoin here: ${invite.inviteUrl}\n\nThis invite is valid for one use and will expire in 7 days.\n\nSee you inside!`,
          });

          // Update member record with metadata
          await strapi.entityService.update('api::member.member', where.id, {
            data: {
              addedOnDiscord: true,
              discordJoinDate: new Date(),
              discordAccess: {
                inviteUrl: invite.inviteUrl,
                inviteCode: invite.inviteCode,
                sentAt: new Date(),
              },
            },
          });

          console.log(`Discord invite sent and tracked for ${member.personalEmail}`);
        } catch (error) {
          console.error('Error sending Discord invite:', error.message);
        }
      }
    },

  };
  