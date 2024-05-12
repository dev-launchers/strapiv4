
module.exports = async (ctx, next) => {

  // Check if user is authenticated
  if (!ctx.state.user) {
    console.log(ctx)
    console.log("Not LOGGED IN")
    return ctx.unauthorized('You must be logged in to access this resource.');
  }

  // Check if user is authorized to read notifications
  const userId = ctx.state.user.id; // Get the ID of the logged-in user
  const notificationUserId = ctx.request.body.user; // Get the user ID from the request body

  // If the user ID from the request body does not match the logged-in user's ID, deny access
  console.log(ctx)
  console.log("SOMETHING")
  if (userId !== notificationUserId) {
    return ctx.forbidden('You are not authorized to access this resource.');
  }

  // User is authenticated and authorized, proceed to the next middleware/controller
  await next();
  
};
