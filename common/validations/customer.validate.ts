import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { validator } from "./validator";


export const validateCreateCustomer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }),
  });
  const data = {
    body: req.body,
  };
  validator(schema, data);
  next();
};