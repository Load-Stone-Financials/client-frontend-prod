import type { User } from "firebase/auth";
import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setcurrentUser = (user: User | null) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, [user as User | null]);
