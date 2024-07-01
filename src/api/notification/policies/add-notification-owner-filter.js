
module.exports = async (ctx) => {

  const user = ctx.state.user;

  ctx.request.query = ctx.request.query || {};
  const query = ctx.request.query
  query.filters = {
    ...(query.filters || {}),
    user: user.id
  };

  return true

};
