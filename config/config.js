const env = process.env.NODE_ENV;

if (env) {
  module.exports = require(`./config.${env}.js`);
} else {
  module.exports = require('./config.development.js');
}
