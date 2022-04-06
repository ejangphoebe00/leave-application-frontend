import { createAction, props } from '@ngrx/store';
import { AuthModel} from 'src/app/models';


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

export const STORE_PASSWORD = '[Auth] Store Password';
export const STORE_PASSWORD_SUCCESS = '[Auth] Store Password Success';
export const STORE_PASSWORD_FAILURE = '[Auth] Store Password Failure';

export const EDIT_PROFILE = '[Auth] Edit Profile';
export const EDIT_PROFILE_SUCCESS = '[Auth] Edit Profile Success';
export const EDIT_PROFILE_FAILURE = '[Auth] Edit Profile Failure';

export const UPLOAD_PROFILE_PICTURE = '[Auth] Upload Profile Picture';
export const UPLOAD_PROFILE_PICTURE_SUCCESS = '[Auth] Upload Profile Picture Success';
export const UPLOAD_PROFILE_PICTURE_FAILURE = '[Auth] Upload Profile Picture Failure';

export const GET_PROFILE_PICTURE = '[Auth] Get Profile Picture';
export const GET_PROFILE_PICTURE_SUCCESS = '[Auth] Get Profile Picture Success';
export const GET_PROFILE_PICTURE_FAILURE = '[Auth] Get Profile Picture Failure';

// LOGIN ACTIONS
export const login = createAction(
  LOGIN,
  props<{user: AuthModel}>()
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
  props<{user: any}>()
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
  props<any>()
);

export const passwordRecoverySuccess = createAction(
  PASSWORD_RECOVERY_SUCCESS,
  props<any>()
);

export const passwordRecoveryFailure = createAction(
  PASSWORD_RECOVERY_FAILURE,
  props<{any}>()
);


// STORE PASSWORD ACTIONS
export const storePassword = createAction(
  STORE_PASSWORD,
  props<any>()
);

export const storePasswordSuccess = createAction(
  STORE_PASSWORD_SUCCESS,
  props<any>()
);

export const storePasswordFailure = createAction(
  STORE_PASSWORD_FAILURE,
  props<{any}>()
);

// EDIT PROFILE ACTIONS
export const editProfile = createAction(
  EDIT_PROFILE,
  props<{user: any}>()
);

export const editProfileSuccess = createAction(
  EDIT_PROFILE_SUCCESS,
  props<any>()
);

export const editProfileFailure = createAction(
  EDIT_PROFILE_FAILURE,
  props<{any}>()
);

// UPLOAD PROFILE PICTURE ACTIONS
export const uploadProfilePicture = createAction(
  UPLOAD_PROFILE_PICTURE,
  props<{user: any}>()
);

export const uploadProfilePictureSuccess = createAction(
  UPLOAD_PROFILE_PICTURE_SUCCESS,
  props<any>()
);

export const uploadProfilePictureFailure = createAction(
  UPLOAD_PROFILE_PICTURE_FAILURE,
  props<{any}>()
);

// GET PROFILE PICTURE ACTIONS
export const getProfilePicture = createAction(
  GET_PROFILE_PICTURE,
  props<any>()
);

export const getProfilePictureSuccess = createAction(
  GET_PROFILE_PICTURE_SUCCESS,
  props<any>()
);

export const getProfilePictureFailure = createAction(
  GET_PROFILE_PICTURE_FAILURE,
  props<{any}>()
);
