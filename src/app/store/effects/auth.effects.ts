import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as AuthActions from "src/app/store/actions/auth.actions"
import { AuthModel } from 'src/app/models/auth.model';

import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private router: Router,
        private toastr: ToastrService,
        // private payload: AuthModel
    ) { }

    // effects go here
    login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      exhaustMap(action =>
        this.apiService.login(action.user).pipe(
          map(response => AuthActions.loginSuccess(response)),
          catchError((error: any) => of(userActions.loginFailure(error))))
      )
    )
  );

}
