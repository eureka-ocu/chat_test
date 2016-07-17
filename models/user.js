export const createUserModel = (sequelize, dataTypes) =>
  sequelize.define('user', {
    name: dataTypes.STRING
  });
