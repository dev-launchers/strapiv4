'use strict';
/**
 * github-repo service.
 */
const axios = require('axios');
// Cache fetching from Github for 10 minutes
const CACHE_TTL = 10 * 60 * 1000;
const { createCoreService } = require('@strapi/strapi').factories;

const jwt = require('jsonwebtoken');
const appId = process.env.GITHUB_APP_ID;
const installationId = process.env.GITHUB_APP_INSTALLATION_ID;
let privateKey = process.env.GITHUB_APP_PRIVATE_KEY;


class GithubManager {
    
    constructor() {
        this.url = 'https://api.github.com';
        this.defaultHeaders = {
            'Accept': 'application/vnd.github.v3+json',
        };
        this.knownBots = ['fluxcdbot', 'dev-launchers-flux'];
        this.cache = new Map();
    }

    repoURL(user, repo) {
        return `https://github.com/${user}/${repo}`;
    }

    async repoCodeFreq(user, repo) {
        const url = new URL(`${this.url}/repos/${user}/${repo}/stats/code_frequency`);
        const fetchFunc = async () => {
            const resp = await axios.get(
                url.toString(),
                this.defaultHeaders,
            ); 
            const cachedData = this.fetchCache(url);
            if (cachedData) {
                return cachedData;
            }
            const freq = resp.data.map(change => {
                return {
                    datetime: new Date(change[0] * 1000),
                    addedLines: change[1],
                    removedLines: change[2],
                };
            });
            return freq;
        };
        return await this.cacheWrapper(url, fetchFunc);
    }

    async repoIssues(user, repo) {
        const url = new URL(`${this.url}/repos/${user}/${repo}/issues`);
        const fetchFunc = async () => {
            const resp = await axios.get(
                url.toString(),
                this.defaultHeaders,
            );
            const cachedData = this.fetchCache(url);
            if (cachedData) {
                return cachedData;
            }
            return resp.data;
        };
        return await this.cacheWrapper(url, fetchFunc);
    }

    async repoContributors(user, repo) {
        const url = new URL(`${this.url}/repos/${user}/${repo}/stats/contributors`);
        const fetchFunc = async () => {
            const resp = await axios.get(
                url.toString(),
                this.defaultHeaders,
            );
            const contributors = resp.data.reduce((filtered, c) => {
                const username = c.author.login;
                if (!this.knownBots.includes(username)) {
                    filtered.push({
                        name: c.author.login,
                        githubURL: c.author.html_url,
                        avatarURL: c.author.avatar_url,
                        contributions: c.total
                    });
                }
                return filtered;
            }, []);
            contributors.sort((c1, c2) => {
                return c2.contributions - c1.contributions;
            });
            return contributors;
        };
        return await this.cacheWrapper(url, fetchFunc);
    }

    async cacheWrapper(url, f) {
        const key = url.pathname;
        const cachedData = this.fetchCache(key);
        if (cachedData) {
            return cachedData;
        }
        const freshData = await f();
        this.addCache(key, freshData);
        return freshData;
    }

    fetchCache(key) {
        const data = this.cache.get(key);
        if (data) {
            if (this.hasExpired(data)) {
                this.cache.delete(key);
            } else {
                return data;
            }
        }
    }

    addCache(key, data) {
        this.cache.set(key, {
            data,
            addedTime: Date.now(),
        });
    }

    hasExpired(cacheEntry) {
        return cacheEntry.addedTime + CACHE_TTL < Date.now();
    }

    async getInstallationToken() {
        const now = Math.floor(Date.now() / 1000);

        if (privateKey.startsWith('LS0t') || !privateKey.startsWith('-----BEGIN')) {
            // Looks base64-encoded
            privateKey = Buffer.from(privateKey, 'base64').toString('utf8');
        }

        const token = jwt.sign(
            {
                iat: now - 60,
                exp: now + 600,
                iss: appId,
            },
            privateKey,
            { algorithm: 'RS256' }
        );

        const response = await axios.post(
            `https://api.github.com/app/installations/${installationId}/access_tokens`,
            {},
            {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github+json',
                'User-Agent': 'Strapi-App',
            },
            }
        );

        return response.data.token;
    }

    async sendOrgInviteByUsername(username) {
        const org = 'dev-launchers';
      
        if (!username) {
            throw new Error('Missing GitHub username');
        }
      
        try {
            const installationToken = await this.getInstallationToken();
            // Get the GitHub user ID
            const userResp = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Accept: 'application/vnd.github+json',
                    Authorization: `token ${installationToken}`,
                    'User-Agent': 'Strapi-App',
                },
            });
      
            const userId = userResp?.data?.id;

            if (!userId) {
                throw new Error(`Could not fetch GitHub user ID for username: ${username}`);
            }
      
            // Send invite using invitee_id
            const inviteResp = await axios.post(
                `https://api.github.com/orgs/${org}/invitations`,
                { invitee_id: userId },
                {
                    headers: {
                    Authorization: `token ${installationToken}`,
                    Accept: 'application/vnd.github+json',
                    'User-Agent': 'Strapi-App',
                    },
                }
          );
      
            return inviteResp.data;
        } catch (error) {
          strapi.log.error(`GitHub Invite Error: (${username}) `, error.response?.data || error.message);
          throw error;
        }
    }


}

module.exports = new GithubManager();



