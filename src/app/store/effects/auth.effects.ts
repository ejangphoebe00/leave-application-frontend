import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import * as authActions from "src/app/store/actions/auth.actions"


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        // private storage: localStorage
    ) { }

    // effects go here
    login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap(action =>
        this.apiService.login(action.user).pipe(
          map(resp => {
            console.log("REAPONSE", resp)
            console.log(action)
              return authActions.loginSuccess(
              {
              access_token:resp.access_token,
              refresh_token:resp.refresh_token,
              userId: resp.UserId,
              role: resp.user_role,
            });

        }),
          catchError((error: any) => of(authActions.loginFailure(error))))
      )
    )
  );


  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logout),
      exhaustMap(action =>
        this.apiService.logout().pipe(
          map(resp => authActions.logoutSuccess(resp)),
          catchError((error: any) => of(authActions.logoutFailure(error))))
      )
    )
  );





}
