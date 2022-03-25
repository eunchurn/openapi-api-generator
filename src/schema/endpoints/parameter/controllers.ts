import { Request, Response } from "express";

export const params = (req: Request, res: Response) => {
  return res.status(200).send({
    id: 1,
    userId: Number(req.params.id),
    createdAt: new Date(),
  })
}
