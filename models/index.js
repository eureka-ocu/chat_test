import { createUserModel } from './user';
import { createMessageModel } from './message';

export const createModels = (sequelize, dataTypes) => {
  const userModel = createUserModel(sequelize, dataTypes);
  const messageModel = createMessageModel(sequelize, dataTypes);

  messageModel.belongsTo(userModel);

  return { userModel, messageModel };
}
