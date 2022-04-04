import { AuthEffects, ApplicationEffects } from './effects';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/auth.reducers';
import * as fromApplication from './reducers/application.reducers';

export interface State {
  user: fromUser.AuthState;
  application: fromApplication.State;
}


export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  application: fromApplication.reducer,
};

const reducerKeys = ['user', 'application'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];


// Application reducers Begin

export const getApplicationState = createFeatureSelector<fromApplication.State>('application');
export const getcurrentApplicationState = createFeatureSelector<fromApplication.State>('currentApplication');
export const getUserState = createFeatureSelector<fromUser.AuthState>('user');

export const getApplications = createSelector(
  getApplicationState,
  fromApplication.getApplications
);

export const getApplication = createSelector(
  getApplicationState,
  fromApplication.getApplication
);

// Application Effects

export const appEffects = [AuthEffects, ApplicationEffects];

// USER REDUCERS

export const getLoginState = createFeatureSelector<fromUser.AuthState>('user');

export const getLoggedInUser = createSelector(
  getLoginState,
  fromUser.getLoggedInUser
);

export const userLogin = createSelector(
  getLoginState,
  fromUser.userLogin
);

export const userSignup = createSelector(
  getLoginState,
  fromUser.userSignup
);
