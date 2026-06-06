'use strict';

async function ensureIdeaNameActiveIndex(strapi) {
  const knex = strapi.db.connection;
  const hasSnakeCase = await knex.schema.hasColumn('idea_cards', 'idea_name');
  const columnName = hasSnakeCase ? '"idea_name"' : '"ideaName"';

  await knex.raw(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_idea_cards_idea_name_active
    ON idea_cards (LOWER(${columnName}))
    WHERE status <> 'deleted'
  `);
}

module.exports = {
  ensureIdeaNameActiveIndex,
};