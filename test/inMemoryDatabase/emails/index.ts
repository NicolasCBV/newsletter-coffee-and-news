import { Email } from "@app/entitie/email";
import { EmailRepo } from "@app/repositories/email";
import { StoragesError } from "@infra/storages/errors/StoragesError";

export class InMemoryEmail implements EmailRepo {
  emails: Email[] = [];

  async create(input: Email) {
    const checkPossibleExistentEmail = this.emails.find(
      (item) => item.email === input.email,
    );

    if (checkPossibleExistentEmail)
      throw new StoragesError({
        name: "Conflict",
        details: "This email was created on in memory database",
        message: "Could not create email",
        privateMessage: "Email already created",
        hint: "Check if you already created this email",
      });

    this.emails.push(input);
  }
}
