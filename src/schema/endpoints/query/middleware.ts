import { NextFunction, Request, Response } from "express";
import { isUndefined } from "lodash";

export function queryMiddleware(req: Request, res: Response, next: NextFunction) {
  const { query: { id, userId } } = req;
  if (isUndefined(id)) return res.status(400).send({ errorCode: 400, message: "id is required" });
  if (isUndefined(userId)) return res.status(400).send({ errorCode: 400, message: "userId is required" });
  return next();
}