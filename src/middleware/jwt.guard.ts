import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const jwtGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed (No token provided)' });
  }

  jwt.verify(token, String(process.env.JWT_SECRET), (err: jwt.VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Authentication failed (Invalid token)' });
    }

    //@ts-ignore
    req.user = decoded;

    next();
  });
};