import BaseError from './base.type';

enum FirebaseCustomCodes {
  NOT_FOUND = 'functions/not-found',
}

export default class FirebaseCustomError extends BaseError {
  constructor(
    message: string,
    public code: string | number | FirebaseCustomCodes,
  ) {
    super(message, code);
  }
}
