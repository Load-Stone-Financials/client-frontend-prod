/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { LOGOUT } from './auth.type';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default authReducer;
