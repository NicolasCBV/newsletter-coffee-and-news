import { emailFactory } from "@test/factory/email";
import { Email } from "./email";

describe("Email entitie test", () => {
  it("should create email", () => {
    const email = emailFactory();

    expect(email).toBeInstanceOf(Email);
  });

  it("should test equal method", () => {
    const email = emailFactory();
    const diffEmail = emailFactory({
      email: "diff@email.com",
    });

    expect(email).toBeInstanceOf(Email);
    expect(diffEmail).toBeInstanceOf(Email);
    expect(email.equal(diffEmail)).not.toEqual;
  });
});
