import { NextFunction, Request, Response } from "express";

import { ApiError } from "../error/apiError";
import { statusCode as statusCodeEnum } from '../enum/statusCode'

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode ?? statusCodeEnum.INTERNAL_SERVER_ERROR;
  const message = error.statusCode ? error.message : "Internal Server Error";
  res.status(statusCode).json({ message });
};
