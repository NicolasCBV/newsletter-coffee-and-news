interface IProps {
  name: string;
  privateMessage: string;
  message: string;
  details: string;
  hint: string;
  code?: number;
}

export class StoragesError extends Error {
  hint: string;
  detais: string;
  privateMessage: string;
  code: number | undefined;

  constructor(input: IProps) {
    super();

    this.name = input.name;
    this.privateMessage = input.privateMessage;
    this.message = input.message;
    this.hint = input.hint;
    this.detais = input.details;
    this.code = input.code;
  }
}
