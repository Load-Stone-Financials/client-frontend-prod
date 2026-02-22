/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth.reducer';
import { LOGOUT } from './auth/auth.type';
import loanDetailsReducer from './loanDetail/loan.details.reducer';
import { userReducer } from './user/user.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  loanDetails: loanDetailsReducer,
});

// action types
const CLEAR_REDUX_STATE = 'CLEAR_REDUX_STATE';

// action creator
export const clearReduxStateAction = () => ({
  type: CLEAR_REDUX_STATE,
});

const initialState = {
  currentUser: null,
};

// export default rootReducer;
const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    storage.removeItem('persist:root');
    state = {} as RootState;
    // reset local storage
    localStorage.clear();
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root');
  }
  if (action.type === CLEAR_REDUX_STATE) {
    storage.removeItem('persist:root');
    state = {} as RootState;
    // reset local storage
    localStorage.clear();
    sessionStorage.clear();
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root');
    return initialState; // Reset state to initial state
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
