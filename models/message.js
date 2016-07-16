module.exports = function(sequelize, dataTypes) {
  return sequelize.define('message', {
    body: dataTypes.STRING
  });
};
