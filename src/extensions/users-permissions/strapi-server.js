const { jwt } = require('./server/middlewares');
const user = require('./content-types/user');

module.exports = (plugin) => {  
    plugin.middlewares['jwt'] = jwt
    plugin.contentTypes.user = user;
    return plugin;
  };