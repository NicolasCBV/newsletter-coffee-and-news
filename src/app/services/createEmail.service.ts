import { Email } from "@app/entitie/email";
import { EmailRepo } from "@app/repositories/email";

interface IProps {
  email: string;
}

export class CreateEmailService {
  constructor(private readonly emailRepo: EmailRepo) {}

  async exec(input: IProps) {
    const email = new Email(input);

    await this.emailRepo.create(email);
  }
}
