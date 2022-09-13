import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';

const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as CustomError;
  res.status(status || 500).json({
    // code: err.code || 'undefinedError',
    message,
  });
};

export default errorMiddleware;