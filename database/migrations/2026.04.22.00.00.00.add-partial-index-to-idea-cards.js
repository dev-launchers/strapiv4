//'use strict';

//module.exports = {
//  async up(knex) {
    //await knex.raw(`
    //  DROP INDEX IF EXISTS idea_cards_ideaname_unique
    //`);

    //await knex.raw(`
    //  ALTER TABLE idea_cards
    //  DROP CONSTRAINT IF EXISTS idea_cards_ideaname_unique
    //`);

//    await knex.raw(`
//      CREATE UNIQUE INDEX idx_idea_cards_ideaname_active
//      ON idea_cards (LOWER("ideaName"))
//      WHERE status <> 'deleted'
//    `);
//  },

//  async down(knex) {
//    await knex.raw(`
//      DROP INDEX IF EXISTS idx_idea_cards_ideaname_active
//    `);

    //await knex.raw(`
    //  ALTER TABLE idea_cards
    //  ADD CONSTRAINT idea_cards_ideaname_unique UNIQUE ("ideaName")
    //`);

//  },
//};

'use strict';

async function up(knex) {
  await knex.raw(`
    CREATE UNIQUE INDEX idx_idea_cards_idea_name_active
    ON idea_cards (LOWER(idea_name))
    WHERE status <> 'deleted'
  `);
}

module.exports = { up };