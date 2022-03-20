import { createAction, props } from '@ngrx/store';
import { AuthModel } from 'src/app/models/auth.model';

export const login = createAction('[Auth] Login',
    props<AuthModel>()
);
export const loginComplete = createAction(
    '[Auth] loginComplete',
    props<{ user: AuthModel; isAuthenticated: boolean }>()
);
export const loginError = createAction(
    '[Auth] loginComplete',
    props<{ errorMessage: string }>()
);
export const register = createAction('[Auth] Register');
export const reset = createAction('[Auth] Reset');
export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction('[Auth] logoutComplete');

// import { Action } from '@ngrx/store';


// export enum AuthActionTypes {
//   LOGIN = '[Auth] Login'
// }

// export class LogIn implements Action {
//     readonly type = AuthActionTypes.LOGIN;
//     constructor(public payload: any) {}
// }

// export type All =
//     | LogIn;
