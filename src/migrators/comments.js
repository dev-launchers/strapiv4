const auth = require("../extensions/users-permissions/controllers/auth");

module.exports = async (strapi) => {
  strapi.log.info("Migrating comments");
  const comments = await strapi.db.query("api::comment.comment").findMany({
    where: {
      user: null,
    },
    offset: 0,
    limit: 1000,
  });
  strapi.log.info(`Comments to be migrated: ${comments.length}`);
  for (const comment of comments) {
    const user = await findUserByName(strapi, comment.author);
    if (user) {
      await strapi.db
        .query("api::comment.comment")
        .update({ where: { id: comment.id }, data: { user } });
    }
  }
  strapi.log.info("Done migrating comments");
};

const findUserByName = async (strapi, username) => {
  const existing = await strapi.db.query('plugin::users-permissions.user').findOne({
    where: { username: username }
  });
  return existing;
};
