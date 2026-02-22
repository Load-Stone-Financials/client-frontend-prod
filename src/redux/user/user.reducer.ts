/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_ACTION_TYPES } from "./user.types";
interface UserAction {
  type: string;
  payload: any;
}

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
