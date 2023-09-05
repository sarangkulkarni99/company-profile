import { IResponseHandler } from "../types/responseHandler.types";

export class ResponseHandler {
  constructor(public data: IResponseHandler, public error: any = null) {}
}

export class MessageHandler {
  constructor(public statusCode: number, public message: string) {}
}
