module.exports = async (ctx) => {
  const user = ctx.state.user;

  if (ctx.params?.id) {
    const notification = await strapi.entityService.findOne("api::notification.notification", ctx.params.id, { populate: ["user"] });
    return notification.user.id === user.id;
  }
  ctx.request.query = ctx.request.query || {};
  const query = ctx.request.query;
  query.filters = {
    ...(query.filters || {}),
    user: user.id,
  };
  return true;
};
