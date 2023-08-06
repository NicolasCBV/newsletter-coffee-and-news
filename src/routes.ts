import { Response, Request, Router } from "express";
import { SendEmailDTO } from "./infra/DTOs/send-email";
import { SendEmailController } from "./infra/controllers/send-email.controller";
import { routes_names } from "@infra/constants/routes";

export const routes = Router();

routes.get(
  "/",
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req: Request,
    res: Response,
  ) => {
    return res.sendFile("index.html");
  },
);

routes.post(
  routes_names.send_email,
  SendEmailDTO.exec,
  SendEmailController.exec,
);
