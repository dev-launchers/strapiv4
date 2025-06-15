'use strict';
const axios = require('axios');

class DiscordManager {
  constructor() {
    this.token = process.env.DISCORD_BOT_TOKEN;
    this.inviteChannelId = process.env.DISCORD_INVITE_CHANNEL_ID; // text channel ID
  }

  async sendInvite() {
    if (!this.token || !this.inviteChannelId) {
      throw new Error('Missing Discord token or invite channel ID');
    }

    try {
      const response = await axios.post(
        `https://discord.com/api/v10/channels/${this.inviteChannelId}/invites`,
        {
          max_uses: 1,
          unique: true,
          max_age: 604800, // 1 Week in seconds
        },
        {
          headers: {
            Authorization: `Bot ${this.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        inviteCode: response.data.code,
        inviteUrl: `https://discord.gg/${response.data.code}`,
      };
    } catch (error) {
      console.error('Discord Invite Error:', error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = new DiscordManager();
