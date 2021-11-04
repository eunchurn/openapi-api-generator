import { Request, Response } from "express";

const params = (req: Request, res: Response) => {
  res.json({
    id: 1,
    userId: Number(req.params.id),
    createdAt: new Date(),
  })
}

export { params }
