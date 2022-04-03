import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import * as authActions from "src/app/store/actions/auth.actions"


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
    ) { }

    // effects go here
    login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap(action =>
        this.apiService.login(action.user).pipe(
          map(response => authActions.loginSuccess(response)),
          catchError((error: any) => of(authActions.loginFailure(error))))
      )
    )
  );

}
