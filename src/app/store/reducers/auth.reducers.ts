import { Action, createReducer, on } from '@ngrx/store';
import { User, AuthModel} from '../../models';
import * as userActions from '../actions';
import * as storage from '../storage';

export interface AuthState {
  user: User;
  result?: any;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: AuthState = {
  user: storage.getItem('user').user,
  result: {},
  isAuthenticated: false,
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

export const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.loginSuccess, (state, result) => ({user: result.user,
                          result, isAuthenticated: true, isLoading: false,
                          isLoadingSuccess: true, isLoadingFailure: false})),

  on(userActions.signup, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.signupSuccess, (state, result) => ({user: state.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: false})),

  on(userActions.logout, (state) => ({...state, isLoading: true})),
  on(userActions.logoutSuccess, (state, result) => ({user: state.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: false})),

  on(userActions.passwordRecovery, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.passwordRecoverySuccess, (state, result) => ({user: state.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false})),

  on(userActions.storePassword, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.storePasswordSuccess, (state, result) => ({user: state.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: true})),

  on(userActions.editProfile, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.editProfileSuccess, (state, result) => ({user: result.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: true})),

  on(userActions.uploadProfilePicture, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.uploadProfilePictureSuccess, (state, result) => ({user: result.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: true})),

  on(userActions.getProfilePicture, (state, {user}) => ({user, isLoading: true, })),
  on(userActions.getProfilePictureSuccess, (state, result) => ({user: result.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false, isAuthenticated: true}))
);

export function reducer(state: AuthState | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: AuthState) => {
  return {
    user: state.user,
    result: state.result,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userLogin = (state: AuthState) => {
  return {
    user: state.user,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userSignup = (state: AuthState) => {
  return {
    user: state.user,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};
