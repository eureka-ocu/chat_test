var sequelize = require('sequelize');
var seq = new sequelize('my_chat_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

var user = seq.define('user', {
  name: sequelize.STRING
});

exports.user = user;