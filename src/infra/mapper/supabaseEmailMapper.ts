import { Email } from "@app/entitie/email";

interface ISupabaseEmail {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class SupabaseEmailMapper {
  static toSupabase(input: Email): ISupabaseEmail {
    return {
      email: input.email,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
    };
  }

  static toEntitie(input: ISupabaseEmail): Email {
    return new Email(input);
  }
}
