import { statusCode } from '../enum/statusCode'

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, statusCode.BAD_REQUEST);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, statusCode.UNAUTHORIZED);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, statusCode.NOT_FOND);
  }
}
