import { Request, RequestHandler, Response } from "express";
import { validationResult } from "express-validator";

export const ValidationHandler = async (
  req: Request,
  res: Response,
  next: (error?: any) => void
): Promise<any> => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });
  next();
};
