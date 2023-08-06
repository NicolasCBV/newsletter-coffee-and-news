import { CreateEmailService } from "./createEmail.service";
import { InMemoryEmail } from "@test/inMemoryDatabase/emails";
import { emailFactory } from "@test/factory/email";
import { Email } from "@app/entitie/email";
import { StoragesError } from "@infra/storages/errors/StoragesError";

const createEmailServiceExecution = jest.spyOn(
  InMemoryEmail.prototype,
  "create",
);

describe("Create email service", () => {
  let inMemoryEmail: InMemoryEmail;
  let createEmail: CreateEmailService;

  beforeEach(() => {
    inMemoryEmail = new InMemoryEmail();
    createEmail = new CreateEmailService(inMemoryEmail);
  });

  it("should create email", async () => {
    const entitie = emailFactory();

    await createEmail.exec({ email: entitie.email });

    expect(createEmailServiceExecution).toHaveBeenCalledTimes(1);
    expect(inMemoryEmail.emails[0]).toBeInstanceOf(Email);
    expect(entitie.equal(inMemoryEmail.emails[0])).toEqual;
  });

  it("should throw one error: email already exist", async () => {
    const entitie = emailFactory();

    await createEmail.exec({ email: entitie.email });

    expect(createEmail.exec({ email: entitie.email })).rejects.toThrowError(
      StoragesError,
    );
  });
});
