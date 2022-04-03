import { createAction, props } from '@ngrx/store';
import { AuthModel, User } from 'src/app/models';


export const LOGIN = '[Auth] Login User';
export const LOGIN_SUCCESS = '[Auth] Login User Success';
export const LOGIN_FAILURE = '[Auth] Login User Failure';

export const SIGNUP = '[Auth] Register User';
export const SIGNUP_SUCCESS = '[Auth] Register User Success';
export const SIGNUP_FAILURE = '[Auth] Register User Failure';

export const GET_USER = '[Auth] Get User';
export const GET_USER_SUCCESS = '[Auth] Get User Success';
export const GET_USER_FAILURE = '[Auth] Get User Failure';

export const LOGOUT = '[Auth] Logout User';
export const LOGOUT_SUCCESS = '[Auth] Logout User Success';
export const LOGOUT_FAILURE = '[Auth] Logout User Failure';

export const PASSWORD_RECOVERY = '[Auth] Password Recovery';
export const PASSWORD_RECOVERY_SUCCESS = '[Auth] Password Recovery Success';
export const PASSWORD_RECOVERY_FAILURE = '[Auth] Password Recovery Failure';

// LOGIN ACTIONS
export const login = createAction(
  LOGIN,
  props<{user: User}>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<any>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{any}>()
);

// SIGNUP ACTIONS
export const signup = createAction(
  SIGNUP,
  props<{user: User}>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<any>()
);

export const signupFailure = createAction(
  SIGNUP_FAILURE,
  props<{any}>()
);


// GET USER ACTIONS
export const getUser = createAction(
  GET_USER
);

export const getUserSuccess = createAction(
  GET_USER_SUCCESS,
  props<any>()
);

export const getUserFailure = createAction(
  GET_USER_FAILURE,
  props<{any}>()
);

// LOGOUT ACTIONS
export const logout = createAction(
  LOGOUT,
  props<{user_id}>()
);

export const logoutSuccess = createAction(
  LOGOUT_SUCCESS,
  props<any>()
);

export const logoutFailure = createAction(
  LOGOUT_FAILURE,
  props<{any}>()
);

// PASSWORD RECOVERY ACTIONS
export const passwordRecovery = createAction(
  PASSWORD_RECOVERY,
  props<{user_id}>()
);

export const passwordRecoverySuccess = createAction(
  PASSWORD_RECOVERY_SUCCESS,
  props<any>()
);

export const passwordRecoveryFailure = createAction(
  PASSWORD_RECOVERY_FAILURE,
  props<{any}>()
);
