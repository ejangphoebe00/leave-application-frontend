import { createAction, props } from '@ngrx/store';
import { Application } from '../../models';



export const CREATE_APPLICATION = '[Application] Create Application';
export const CREATE_APPLICATION_SUCCESS = '[Application] Create Application Success';
export const CREATE_APPLICATION_FAILURE = '[Application] Create Application Failure';

export const EDIT_APPLICATION = '[Application] Edit Application';
export const EDIT_APPLICATION_SUCCESS = '[Application] Edit Application Success';
export const EDIT_APPLICATION_FAILURE = '[Application] Edit Application Failure';

export const EDIT_ADDRESS = '[Application] Edit Address';
export const EDIT_ADDRESS_SUCCESS = '[Application] Edit Address Success';
export const EDIT_ADDRESS_FAILURE = '[Application] Edit Address Failure';

export const GET_SINGLE_APPLICATION = '[Application] Get Single Application';
export const GET_SINGLE_APPLICATION_SUCCESS = '[Application] Get Single Application Success';
export const GET_SINGLE_APPLICATION_FAILURE = '[Application] Get Single Application Failure';

export const GET_USER_APPLICATIONS = '[Application] Get User Applications';
export const GET_USER_APPLICATIONS_SUCCESS = '[Application] Get User Applications Success';
export const GET_USER_APPLICATIONS_FAILURE = '[Application] Get User Applications Failure';

export const GET_ALL_APPLICATIONS = '[Application] Get All Applications';
export const GET_ALL_APPLICATIONS_SUCCESS = '[Application] Get All Applications Success';
export const GET_ALL_APPLICATIONS_FAILURE = '[Application] Get All Applications Failure';

export const COMPUTE_APPLICATION = '[Application] Compute Application';
export const COMPUTE_APPLICATION_SUCCESS = '[Application] Compute Application Success';
export const COMPUTE_APPLICATION_FAILURE = '[Application] Compute Application Failure';

export const APPROVE_APPLICATION = '[Application] Approve Application';
export const APPROVE_APPLICATION_SUCCESS = '[Application] Approve Application Success';
export const APPROVE_APPLICATION_FAILURE = '[Application] Approve Application Failure';

export const ADD_RECOMMENDATION = '[Application] Add Recommendation';
export const ADD_RECOMMENDATION_SUCCESS = '[Application] Add Recommendation Success';
export const ADD_RECOMMENDATION_FAILURE = '[Application] Add Recommendation Failure';


// CREATE APPLICATION ACTIONS
export const createApplication = createAction(
  CREATE_APPLICATION,
  props<{application: any}>()
);

export const createApplicationSuccess = createAction(
  CREATE_APPLICATION_SUCCESS,
  props<any>()
);

export const createApplicationFailure = createAction(
  CREATE_APPLICATION_FAILURE,
  props<{any}>()
);

// GET APPLICATION ACTIONS
export const getApplications = createAction(
  GET_ALL_APPLICATIONS
);

export const getApplicationsSuccess = createAction(
  GET_ALL_APPLICATIONS_SUCCESS,
  props<any>()
);

export const getApplicationsFailure = createAction(
  GET_ALL_APPLICATIONS_FAILURE,
  props<{any}>()
);



// export const deleteApplication = createAction(
//   DELETE_APPLICATION,
//   props<{applicationid}>()
// );
//
// export const deleteApplicationSuccess = createAction(
//   DELETE_APPLICATION_SUCCESS,
//   props<any>()
// );
//
// export const deleteApplicationFailure = createAction(
//   DELETE_APPLICATION_FAILURE,
//   props<{any}>()
// );

export const editApplication = createAction(
  EDIT_APPLICATION,
  props<{application: any}>()
);

export const editApplicationSuccess = createAction(
  EDIT_APPLICATION_SUCCESS,
  props<any>()
);

export const editApplicationFailure = createAction(
  EDIT_APPLICATION_FAILURE,
  props<{any}>()
);