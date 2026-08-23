module.exports = async (ctx) => {
  const user = ctx.state.user;

  const id = Number(ctx.params?.id);

  if (!user || !Number.isInteger(id)) {
    return false;
  }

  let comment;
  try {
    comment = await strapi.entityService.findOne(
      'api::comment.comment',
      id,
      { populate: ['user'] }
    );
  } catch {
    return false;
  }

  if (!comment || !comment.user) {
    return false;
  }

  return comment.user.id === user.id;
};
