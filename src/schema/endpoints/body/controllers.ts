import { Request, Response } from "express";

export function body(req: Request, res: Response) {
  const { body } = req;
  res.status(200).send(body);
}