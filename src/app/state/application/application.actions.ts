import { createAction, props } from "@ngrx/store";
import { Application } from "../models/application.model";

export const appLoaded = createAction(
  "[App] App Loaded"
);

export const fetchApplicationSuccess = createAction(
  "[Application API] Fetch Application Success",
  props<{ applications: Application[] }>()
);

export const fetchApplicationFailed = createAction(
  "[Application API] Fetch Application Failed",
  props<{ error: any }>()
);

export const applicationFormSubmitted = createAction(
  "[Post Application Page] Application Form Submitted",
  props<{ application: Application }>()
);

export const postApplicationSuccess = createAction(
  "[Application API] Post Application Success"
);

export const postApplicationFailed = createAction(
  "[Application API] Post Application Failed",
  props<{ error: any }>()
);

export const editApplicationFormSubmitted = createAction(
  "[Edit Application Page] Edit Application Item Form Submitted",
  props<{ application: Application }>()
);

export const editApplicationSuccess = createAction(
  "[Application API] Edit Application Success",
  props<{ application: Application }>()
);

export const editApplicationFailed = createAction(
  "[Application API] Edit Application Failed",
  props<{ error: any }>()
);

export const deleteApplicationInitiated = createAction(
  "[Delete Application Page] Delete Application Initiated",
  props<{ application_id: string }>()
);

export const deleteApplicationSuccess = createAction(
  "[Application API] Delete Application Failed",
  props<{ error: any }>()
);
