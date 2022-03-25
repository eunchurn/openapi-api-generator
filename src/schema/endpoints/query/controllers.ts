import { Request, Response } from "express";

export function query(req: Request, res: Response) {
  const { query: { id, userId } } = req;
  return res.status(200).send({
    id,
    userId,
    createdAt: new Date(),
  })
}