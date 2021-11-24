import { Request, Response } from "express";

export function query(req: Request, res: Response) {
  const { query: { id, userId } } = req;
  res.json({
    id,
    userId,
    createdAt: new Date(),
  })
}