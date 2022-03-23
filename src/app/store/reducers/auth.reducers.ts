import { createReducer, on } from "@ngrx/store";
import { AuthModel } from "src/app/models/auth.model";
import * as AuthActions from "src/app/store/actions/auth.actions"

export interface AuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: AuthModel | null;
  errorMessage: string | null;
  isLoading: boolean;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    isLoading: false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => ({
      ...state,
      isLoading: true,
  })),

  on(AuthActions.loginComplete, (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: true
  })),

  on(AuthActions.loginError, (state, action) => ({
    ...state,
    errorMessage: action.errorMessage
  })),
);

// const authReducerInternal = createReducer(
//   initialAuthState,

//   on(authActions.loginComplete, (state, { profile, isLoggedIn }) => {
//     return {
//       ...state,
//       profile,
//       isLoggedIn,
//     };
//   }),
//   on(authActions.logout, (state, {}) => {
//     return {
//       ...state,
//       profile: null,
//       isLoggedIn: false,
//     };
//   })
// );

// export function authReducer(state: AuthState | undefined, action: Action) {
//   return authReducerInternal(state, action);
// }
