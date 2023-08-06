import { Email, IEmailEntitieInput } from "@app/entitie/email";

type TOverride = Partial<IEmailEntitieInput>;

export function emailFactory(input?: TOverride) {
  return new Email({
    email: "default@email.com",
    ...input,
  });
}
