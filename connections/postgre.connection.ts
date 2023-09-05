import { sequelize } from "../common/utils/sequelizeConfig";
import { SUCCESS_MESSAGES } from "../common/constants/message.constants";

const { CONNECTED } = SUCCESS_MESSAGES;

export const connectToPostgres = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(CONNECTED);
    return true;
  } catch (error) {
    throw error;
  }
};
