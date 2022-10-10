function isDevEnv() {
    return process.env.NODE_ENV === 'development' ||  process.env.NODE_ENV === 'test';
  }
  
  module.exports = {
    isDevEnv,
  };
  