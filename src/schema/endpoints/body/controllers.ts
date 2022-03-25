import { Request, Response } from "express";

export function body(req: Request, res: Response) {
  const { body } = req;
  // just send body
  return res.status(200).send(body);
}