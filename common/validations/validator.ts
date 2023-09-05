import { Request } from "express";
import Joi from "joi";

export const validator = (
  schema: Joi.ObjectSchema,
  data: { [key: string]: Request | object }
) => {
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    throw { error: true, messages };
  }
  return { error: false };
};
