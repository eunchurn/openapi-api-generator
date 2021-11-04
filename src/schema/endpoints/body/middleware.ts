import { NextFunction, Request, Response } from "express";
import Ajv from "ajv";
import { BodyRequest } from "./Body";

const ajv = new Ajv();

const validate = ajv.compile(BodyRequest)

export function bodyMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const validation = validate(body);
  if (!validation) {
    return res.status(400).send({ errorCode: 400, message: "Request body type is not validated" })
  }
  return next();
}