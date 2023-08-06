import { NextFunction, Request, Response } from "express";

import { ISendEmailProposedBody } from "../DTOs/send-email";
import { CreateEmailService } from "@app/services/createEmail.service";
import { SupaEmailDB } from "@infra/storages/supabase";

export class SendEmailController {
  static async exec(req: Request, res: Response, next: NextFunction) {
    const body: ISendEmailProposedBody = req.body;

    const emailRepo = new SupaEmailDB();
    const emailService = new CreateEmailService(emailRepo);

    return await emailService
      .exec(body)
      .then(() => res.status(201).send())
      .catch((err) => next(err));
  }
}
