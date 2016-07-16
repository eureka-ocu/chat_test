module.exports = function(sequelize, dataTypes) {
  return sequelize.define('user', {
    name: dataTypes.STRING
  });
};
