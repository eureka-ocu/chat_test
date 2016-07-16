var createUserModel = require('./user');
var createMessageModel = require('./message');

module.exports = function(sequelize, dataTypes) {
  var userModel = createUserModel(sequelize, dataTypes);
  var messageModel = createMessageModel(sequelize, dataTypes);

  messageModel.belongsTo(userModel);

  return { userModel, messageModel };
}
