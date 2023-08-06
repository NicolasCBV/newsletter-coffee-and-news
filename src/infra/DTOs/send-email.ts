import { NextFunction, Response, Request } from "express";
import { z } from "zod";

export interface ISendEmailProposedBody {
  email: string;
}

export class SendEmailDTO {
  static async exec(req: Request, res: Response, next: NextFunction) {
    const proposedBody = z.object({
      email: z.string().email(),
    });

    await proposedBody
      .parseAsync(req.body)
      .then(() => next())
      .catch(() => {
        return res.status(401).send();
      });
  }
}
