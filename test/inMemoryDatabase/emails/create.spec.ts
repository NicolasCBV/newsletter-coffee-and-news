import { emailFactory } from "@test/factory/email";
import { InMemoryEmail } from ".";
import { StoragesError } from "@infra/storages/errors/StoragesError";

describe("Create in memory email test", () => {
  let inMemoryEmail: InMemoryEmail;

  beforeEach(() => {
    inMemoryEmail = new InMemoryEmail();
  });

  it("should create email", async () => {
    const email = emailFactory();
    await inMemoryEmail.create(email);

    expect(email.equal(inMemoryEmail.emails[0]));
  });

  it("should throw one error: email already exist", async () => {
    const email = emailFactory();
    await inMemoryEmail.create(email);

    expect(inMemoryEmail.create(email)).rejects.toThrowError(StoragesError);
  });
});
