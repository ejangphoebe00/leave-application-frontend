import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ApiService } from 'src/app/services/api.service';
import * as authActions from 'src/app/store/actions/auth.actions';
import * as fromRoot from 'src/app/store';
import { User } from 'src/app/models';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private readonly store: Store,
    private apiService: ApiService
  ) {

    this.store.select(fromRoot.getLoginState).pipe(
        takeUntil(this.destroy$)
      ).subscribe(data => {
        localStorage.setItem("role",data.result.role);
        localStorage.setItem("userId",data.result.userId);
        localStorage.setItem("access_token", data.result.access_token);
        localStorage.setItem("refresh_token", data.result.refresh_token);
      });

    if (this.apiService.getAccessToken() != "") {
      this.router.navigate(['/apply_for_leave']);
    };

  }

  user: User = new User()

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    // console.log(this.user)
    this.store.dispatch(authActions.login({
      user: {
              UserEmailAddress: this.user.UserEmailAddress,
              UserPassword: this.user.UserPassword
            }
    }));
  }


  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }




}
