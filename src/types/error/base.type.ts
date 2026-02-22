export default class BaseError extends Error {
  declare code: string | number;

  constructor(
    message: string,
    code: string | number,
  ) {
    super(message);
    this.code = code;
  }
}
