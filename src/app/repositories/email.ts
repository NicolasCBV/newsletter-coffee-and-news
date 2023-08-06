import { Email } from "../entitie/email";

export abstract class EmailRepo {
  abstract create(email: Email): Promise<void>;
}
