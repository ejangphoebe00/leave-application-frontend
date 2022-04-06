import { Action, createReducer, on } from '@ngrx/store';
import { Application, Address } from '../../models';
import * as applicationActions from '../actions/application.actions';
import * as _ from 'lodash'
import * as storage from '../storage';

export interface State {
  applications?: Application[];
  application?: Application;
  address?: Address[];
  currentApplication?: Application;
  deleteApplicationId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  applications: storage.getItem('app_f').applications,
  address: storage.getItem('app_f').address,
  currentApplication: {},
  application: {},
  deleteApplicationId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const app_fReducer = createReducer(
  initialState,

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
    // for i in
    return {
      applications,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Get All Applications
  on(applicationActions.getAllApplications, (state) => ({
    ...state, isLoading: true})),
  on(applicationActions.getAllApplicationsSuccess, (state, result) => ({
    applications: result.response, isLoading: false, isLoadingSuccess: true})),

  // Get All User Applications
  on(applicationActions.getUserApplications, (state) => ({
    ...state, isLoading: true})),
  on(applicationActions.getUserApplicationsSuccess, (state, result) => ({
    applications: result.response, isLoading: false, isLoadingSuccess: true})),

  // Get Single Application
  on(applicationActions.getSingleApplication, (state) => ({
    ...state, isLoading: true})),
  on(applicationActions.getSingleApplicationSuccess, (state, result) => ({
      application: result.response, isLoading: true, isLoadingSuccess: true })),

  // Edit Application Reducers
  on(applicationActions.editApplication, (state, {application}) => ({...state, isLoading: true, currentApplication: application})),
  on(applicationActions.editApplicationSuccess, (state, result) => {
    let applications = undefined !== state.applications ? _.cloneDeep(state.applications) : [];
    const currentApplication = undefined !== state.currentApplication ? _.cloneDeep(state.currentApplication) : {};
    applications = applications.map(application => {
      if (application.id === currentApplication.id) {
        application = currentApplication;
      }
      return application;
    });
    return {
      applications,
      isLoading: false,
      isLoadingSuccess: true
      };
    })
  );

    // Edit Address Reducers
    // on(applicationActions.editAddress, (state, {address}) => ({...state, address,
    //   isLoading: true})),
    // on(applicationActions.editAddressSuccess, (state, result) => ({result
    //   isLoading: false, isLoadingSuccess: true})),


  // on(applicationActions.computeApplication, (state, {application}) => ({...state, isLoading: true, currentApplication: application})),
  // on(applicationActions.computeApplicationSuccess, (state, result) => {
  //   let applications = undefined !== state.applications ? _.cloneDeep(state.applications) : [];
  //   const currentApplication = undefined !== state.currentApplication ? _.cloneDeep(state.currentApplication) : {};
  //   applications = applications.map(application => {
  //     if (application.id === currentApplication.id) {
  //       application = currentApplication;
  //     }
  //     return application;
  //   });
  //   return {
  //     applications,
  //     isLoading: false,
  //     isLoadingSuccess: true
  //     };
  //   })
  // );
  //
  //
  //
  // on(applicationActions.approveApplication, (state, {application}) => ({...state, isLoading: true, currentApplication: application})),
  // on(applicationActions.approveApplicationSuccess, (state, result) => {
  //   let applications = undefined !== state.applications ? _.cloneDeep(state.applications) : [];
  //   const currentApplication = undefined !== state.currentApplication ? _.cloneDeep(state.currentApplication) : {};
  //   applications = applications.map(application => {
  //     if (application.id === currentApplication.id) {
  //       application = currentApplication;
  //     }
  //     return application;
  //   });
  //   return {
  //     applications,
  //     isLoading: false,
  //     isLoadingSuccess: true
  //     };
  //   })
  // );





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

export const getApplication = (state: State) => {
  return {
    application: state.application,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
