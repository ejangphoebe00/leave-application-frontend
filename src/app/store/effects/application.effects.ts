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

  getApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.getApplications),
      exhaustMap(action =>
        this.apiService.getApplications().pipe(
          map(response => {
            console.log("response:::", response)
            return applicationActions.getApplicationsSuccess({response})
          }),
          catchError((error: any) => of(applicationActions.getApplicationsFailure(error))))
      )
    )
  );

  createApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.createApplication),
      exhaustMap(action =>
        this.apiService.addApplication(action.application).pipe(
          map(response => applicationActions.createApplicationSuccess(response)),
          catchError((error: any) => of(applicationActions.createApplicationFailure(error))))
      )
    )
  );

  // deleteApplication$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(applicationActions.deleteApplication),
  //     exhaustMap(action => this.apiService.deleteApplication(action.applicationid).pipe(
  //         map(response => applicationActions.deleteApplicationSuccess(response)),
  //         catchError((error: any) => of(applicationActions.deleteApplicationFailure(error))))
  //     )
  //   )
  // );

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

}
