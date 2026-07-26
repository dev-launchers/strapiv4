module.exports = async (ctx) => {
  const user = ctx.state.user;

  if (!user || !ctx.params?.id) {
    return false;
  }

  const comment = await strapi.entityService.findOne(
    "api::comment.comment",
    ctx.params.id,
    { populate: ["user"] }
  );

  if (!comment || !comment.user) {
    return false;
  }

  return comment.user.id === user.id;
};
