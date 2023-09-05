import { MessageHandler } from "../utils/responseHandler";
import { ERROR_CODES, SUCCESS_CODES } from "./statusCode.constants";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "./message.constants";

const { CONFLICT } = ERROR_CODES;

const { OK } = SUCCESS_CODES;

const { NOT_FOUND, NOT_UPDATED } = ERROR_MESSAGES;

const { CREATED, UPDATED } = SUCCESS_MESSAGES;

export const customerResponse = {
  NOT_FOUND: new MessageHandler(ERROR_CODES.NOT_FOUND, NOT_FOUND),
  CREATED: new MessageHandler(SUCCESS_CODES.CREATED, CREATED),
  UPDATED: new MessageHandler(OK, UPDATED),
  NOT_UPDATED: new MessageHandler(CONFLICT, NOT_UPDATED),
};
