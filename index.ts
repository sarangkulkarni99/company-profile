import { config } from "dotenv";
config();
import express from "express";
import { connectToPostgres } from "./connections/postgre.connection";
import { registerRoutes } from "./controllers/controller.register";
export const app = express();
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from "./common/constants/message.constants";

const { SERVER_RUN_SUCCESS } = SUCCESS_MESSAGES;

const { SERVER_RUN_FAILURE } = ERROR_MESSAGES;

export const startServer = async () => {
  try {
    const { PORT } = process.env;
    await connectToPostgres();
    registerRoutes(app);

    app.listen(PORT, () => {
      console.log(`${SERVER_RUN_SUCCESS} ${PORT}`);
    })
  } catch (e) {
    console.log(e);
    console.error(SERVER_RUN_FAILURE);
    process.exit(1);
  }
};

startServer();