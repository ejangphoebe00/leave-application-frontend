import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as AuthActions from "src/app/store/actions/auth.actions"
import { AuthModel } from 'src/app/models/auth.model';



@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService,
        // private payload: AuthModel
    ) { }

    // effects go here
    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        mergeMap((payload) => this.authService.logIn(payload)
            .pipe(
                // map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
                catchError(() => EMPTY)
            ))
        )
    );
}