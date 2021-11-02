import { Request, Response, NextFunction } from "express";

export const access = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    id: 1,
    userId: 10,
    createdAt: new Date(),
  })
}