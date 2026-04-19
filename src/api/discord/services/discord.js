'use strict';

const axios = require('axios');

const botToken = process.env.DISCORD_BOT_TOKEN;
const channelId = process.env.DISCORD_CHANNEL_ID;
const API_BASE = 'https://discord.com/api/v10';

class DiscordManager {

    constructor() {
        this.headers = {
            Authorization: `Bot ${botToken}`,
            'Content-Type': 'application/json',
        };
    }

    async createServerInvite() {
        if (!botToken) {
            throw new Error('Missing DISCORD_BOT_TOKEN environment variable');
        }
        if (!channelId) {
            throw new Error('Missing DISCORD_CHANNEL_ID environment variable');
        }

        try {
            const response = await axios.post(
                `${API_BASE}/channels/${channelId}/invites`,
                {
                    max_age: 604800,  // 7 days in seconds
                    max_uses: 1,      // single use
                    unique: true,
                },
                { headers: this.headers }
            );

            const inviteCode = response.data.code;
            return `https://discord.gg/${inviteCode}`;
        } catch (error) {
            strapi.log.error(
                'Discord Invite Error:',
                error.response?.data || error.message
            );
            throw error;
        }
    }
}

module.exports = new DiscordManager();
