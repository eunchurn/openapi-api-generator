import { NextFunction, Request, Response } from "express";
import { isNaN, isUndefined } from "lodash";

export function paramsMiddleware(req: Request, res: Response, next: NextFunction) {
  const { params: { id } } = req;
  if (isUndefined(id)) return res.status(400).send({ errorCode: 400, message: "empty parameter" });
  const convertedId = Number(id);
  if (isNaN(convertedId)) return res.status(400).send({ errorCode: 400, message: "id value is not valid number" });
  return next();
}