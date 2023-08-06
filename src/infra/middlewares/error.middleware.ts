import { HttpError } from "@infra/errors/HttpError";
import { StoragesError } from "@infra/storages/errors/StoragesError";
import { NextFunction, Request, Response } from "express";

export class ErrorMiddleware {
  static exec(
    err: Error,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
  ) {
    if (err instanceof HttpError || err instanceof StoragesError) {
      return res.status(err.code ?? 500).json({
        name: err.name,
        message: err.message,
        code: err.code ?? 500,
      });
    }

    return res.status(500).json({
      name: "Internal Server Error",
      code: 500,
    });
  }
}
