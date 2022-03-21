import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token missing"
    });
  }

  const [, token] = authHeader.split(" ");

  try {

    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    req.user = {
      id: user_id
    }

    return next();
  } catch {

    return res.status(401).json({
      message: "Invalid Token"
    });
  }

}