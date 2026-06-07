'use strict';

async function ensureIdeaNameActiveIndex(strapi) {
  const knex = strapi.db.connection;

  await knex.raw(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_idea_cards_idea_name_active
    ON idea_cards (LOWER(idea_name))
    WHERE status <> 'deleted'
  `);
}

module.exports = {
  ensureIdeaNameActiveIndex,
};