import { Action, createReducer, on } from '@ngrx/store';
import { User, AuthModel} from '../../models';
import * as userActions from '../actions';
import * as storage from '../storage';

export interface AuthState {
  user: User;
  result: any;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: AuthState = {
  user: storage.getItem('user').user,
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

export const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state, {data}) => ({...state,
                          result:"", isLoading: true,
                          isLoadingSuccess: false, isLoadingFailure: false})),
  on(userActions.loginSuccess, (state, result) => ({...state,
                          result, isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false})),
  on(userActions.signup, (state, {data}) => ({...state,
                          result: "", isLoading: true,
                          isLoadingSuccess: false, isLoadingFailure: false})),
  on(userActions.signupSuccess, (state, result) => ({user: state.user, result,
                          isLoading: false, isLoadingSuccess: true,
                          isLoadingFailure: false}))
);

export function reducer(state: AuthState | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: AuthState) => {
  return {
    user: state.user,
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
