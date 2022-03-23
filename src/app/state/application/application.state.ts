import { ApplicationModel } from "../models/application.model";

export interface ApplicationState {
  application: ApplicationModel[];
}

export const initialState: ApplicationState = {
  application: [],
};
