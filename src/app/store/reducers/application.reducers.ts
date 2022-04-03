import { Action, createReducer, on } from '@ngrx/store';
import { Application } from '../../models';
import * as applicationActions from '../actions/application.actions';
import * as _ from 'lodash'
import * as storage from '../storage';

export interface State {
  applications?: Application[];
  currentApplication?: Application;
  deleteApplicationId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  applications: storage.getItem('app_f').applications,
  currentApplication: null,
  deleteApplicationId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const app_fReducer = createReducer(
  initialState,

  // GeApplications
  on(applicationActions.getApplications, (state) => ({
    ...state, isLoading: true})),
  on(applicationActions.getApplicationsSuccess, (state, result) => ({
    applications: result.response, isLoading: false, isLoadingSuccess: true})),

  // Create Application Reducers
  on(applicationActions.createApplication, (state, {application}) => ({
    ...state, isLoading: true, currentApplication: application})),
  on(applicationActions.createApplicationSuccess, (state, result) => {
    const applications = undefined !== state.applications ? _.cloneDeep(
      state.applications
    ) : [];
    const currentApplication = undefined !== state.currentApplication ? _.cloneDeep(
      state.currentApplication
    ) : {};
    currentApplication.id = result.applicationId;
    applications.push(currentApplication);
    return {
      applications,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Application Reducers
  // on(applicationActions.deleteApplication, (state, {applicationid}) => ({...state, isLoading: true, deleteApplicationId: applicationid})),
  // on(applicationActions.deleteApplicationSuccess, (state, result) => {
  //   let applications = undefined !== state.applications ? _.cloneDeep(state.applications) : [];
  //   if (result.status) {
  //     applications = applications.filter(application => application.id !== state.deleteApplicationId);
  //   }
  //   return {
  //     applications,
  //     isLoading: false,
  //     isLoadingSuccess: true
  //   };
  // }),

   // Edit Application Reducers
   on(applicationActions.editApplication, (state, {application}) => ({...state, isLoading: true, currentApplication: application})),
   on(applicationActions.editApplicationSuccess, (state, result) => {
    let applications = undefined !== state.applications ? _.cloneDeep(state.applications) : [];
    const currentApplication = undefined !== state.currentApplication ? _.cloneDeep(state.currentApplication) : {};
    applications = applications.map(tsk => {
      if (tsk.id === currentApplication.id) {
        tsk = currentApplication;
      }
      return tsk;
    });
    return {
      applications,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return app_fReducer(state, action);
}

export const getApplications = (state: State) => {
  return {
    applications: state.applications,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
