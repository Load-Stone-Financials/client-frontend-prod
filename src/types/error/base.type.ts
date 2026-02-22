export default class BaseError extends Error {
  constructor(
    message: string,
    public code: string | number,
  ) {
    super(message);
  }
}
