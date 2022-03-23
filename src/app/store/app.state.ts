import * as auth from './reducers/auth.reducers';


export interface AppState {
  authState: auth.AuthState;
}

export const reducers = {
  auth: auth.authReducer
};
