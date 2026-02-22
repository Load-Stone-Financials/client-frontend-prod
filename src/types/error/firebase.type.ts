import BaseError from './base.type';

export const FirebaseCustomCodes = {
  NOT_FOUND: 'functions/not-found',
} as const;

export default class FirebaseCustomError extends BaseError {
  declare code: string | number | (typeof FirebaseCustomCodes)[keyof typeof FirebaseCustomCodes];

  constructor(
    message: string,
    code: string | number | (typeof FirebaseCustomCodes)[keyof typeof FirebaseCustomCodes],
  ) {
    super(message, code as string | number | (keyof typeof FirebaseCustomCodes));
    this.code = code;
  }
}
