export const createMessageModel = (sequelize, dataTypes) =>
  sequelize.define('message', {
    body: dataTypes.STRING
  });
