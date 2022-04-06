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
          map(response => {
            if(response.message == "Login Successful"){
              this.apiService.redirectAuthenticated();
            };
            this.apiService.setLocalStorage(response);
            return authActions.loginSuccess(response);

        }),
          catchError((error: any) => of(authActions.loginFailure(error))))
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signup),
      exhaustMap(action =>
        this.apiService.signup(action.user).pipe(
          map(response => {
            return authActions.signupSuccess(response);
            console.log("..effects");
          }),
          catchError((error: any) => of(authActions.signupFailure(error))))
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


  recoverPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.passwordRecovery),
      exhaustMap(action =>
        this.apiService.recoverPassword(action.user).pipe(
          map(response => authActions.passwordRecoverySuccess(response)
          ),
          catchError((error: any) => of(authActions.passwordRecoveryFailure(error))))
      )
    )
  );


  storePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.storePassword),
      exhaustMap(action =>
        this.apiService.storePassword(action.user).pipe(
          map(response => authActions.storePasswordSuccess(response)
          ),
          catchError((error: any) => of(authActions.storePasswordFailure(error))))
      )
    )
  );

  editProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.editProfile),
      exhaustMap(action =>
        this.apiService.editProfile(action.user).pipe(
          map(response => authActions.editProfileSuccess(response)
          ),
          catchError((error: any) => of(authActions.editProfileFailure(error))))
      )
    )
  );

  uploadPicture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.uploadProfilePicture),
      exhaustMap(action =>
        this.apiService.editProfile(action.user).pipe(
          map(response => authActions.uploadProfilePictureSuccess(response)
          ),
          catchError((error: any) => of(authActions.uploadProfilePictureFailure(error))))
      )
    )
  );


  getPicture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.getProfilePicture),
      exhaustMap(action =>
        this.apiService.getProfilePicture(action.user).pipe(
          map(response => authActions.getProfilePictureSuccess(response)
          ),
          catchError((error: any) => of(authActions.getProfilePictureFailure(error))))
      )
    )
  );


}
