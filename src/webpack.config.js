const path = require('path');

module.exports = {
  // Other configuration options...
  resolve: {
    // Other resolve options...
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  }
  // More configurations...
};