/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { createAction } from '../../utils/reducer/reducer.utils';
import { LOAN_DETAILS_ACTION_TYPES } from './loan.details.type';

export const setLoanDetails = (loanDetails: any) =>
  createAction(LOAN_DETAILS_ACTION_TYPES.GET_LOAN_DETAILS, loanDetails);
