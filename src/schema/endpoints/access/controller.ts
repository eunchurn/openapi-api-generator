import { Request, Response } from "express";

const access = (req: Request, res: Response) => {
  res.json({
    id: 1,
    userId: Number(req.params.id),
    createdAt: new Date(),
  })
}

export { access }
