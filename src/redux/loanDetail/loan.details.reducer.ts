/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { LOAN_DETAILS_ACTION_TYPES } from './loan.details.type';
const INITIAL_STATE = {
  currentLoanDetails: {
    _id: null,
    userId: null,
    nextOfKinDetails: null,
    bankDetails: null,
    loanDocumentDetails: null,
    organizationDetails: null,
    armUserBankDetails: null,
  },
};

const loanDetailsReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case LOAN_DETAILS_ACTION_TYPES.GET_LOAN_DETAILS:
      return {
        ...state,
        currentLoanDetails: payload,
      };
  }
  return state;
};

export default loanDetailsReducer;
