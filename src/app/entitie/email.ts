import { Replace } from "@utils/replace";

export interface IEmailEntitieInput {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

type TInput = Replace<
  Replace<IEmailEntitieInput, { createdAt?: Date }>,
  { updatedAt?: Date }
>;

export class Email {
  private props: IEmailEntitieInput;

  constructor(props: TInput) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public equal(input: Email): boolean {
    return (
      input.email === this.email ||
      input.createdAt === this.createdAt ||
      input.updatedAt === this.updatedAt
    );
  }

  get email(): string {
    return this.props.email;
  }

  set email(input: string) {
    this.props.email = input;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set updatedAt(input: Date) {
    this.props.updatedAt = input;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
