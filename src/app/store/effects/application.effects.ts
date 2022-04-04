import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import * as applicationActions  from '../actions/application.actions';

@Injectable()
export class ApplicationEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  createApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.createApplication),
      exhaustMap(action => this.apiService.addApplication(action.application).pipe(
          map(response => applicationActions.createApplicationSuccess(response)),
          catchError((error: any) => of(applicationActions.createApplicationFailure(error))))
      )
    )
  );

  editApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.editApplication),
      exhaustMap(action =>
        this.apiService.editApplication(action.application).pipe(
          map(response => applicationActions.editApplicationSuccess(response)),
          catchError((error: any) => of(applicationActions.editApplicationFailure(error))))
      )
    )
  );

  getAllApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.getAllApplications),
      exhaustMap(action =>
        this.apiService.getAllApplications().pipe(
          map(response => {
            console.log("response:::", response)
            return applicationActions.getAllApplicationsSuccess({response})
          }),
          catchError((error: any) => of(applicationActions.getAllApplicationsFailure(error))))
      )
    )
  );

  getUserApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.getUserApplications),
      exhaustMap(action =>
        this.apiService.getUserApplications().pipe(
          map(response => {
            console.log("response:::", response)
            return applicationActions.getUserApplicationsSuccess({response})
          }),
          catchError((error: any) => of(applicationActions.getUserApplicationsFailure(error))))
      )
    )
  );

  getSingleApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.getSingleApplication),
      exhaustMap(action =>
        this.apiService.getSingleApplication(action.applicationId).pipe(
          map(response => {
            console.log("response:::", response)
            return applicationActions.getSingleApplicationSuccess({response})
          }),
          catchError((error: any) => of(applicationActions.getSingleApplicationFailure(error))))
      )
    )
  );

}
