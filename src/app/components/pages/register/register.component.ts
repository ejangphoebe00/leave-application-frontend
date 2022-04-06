import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ApiService } from 'src/app/services/api.service';
import * as authActions from 'src/app/store/actions/auth.actions';
import * as fromRoot from 'src/app/store';
import { AuthModel } from 'src/app/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private readonly store: Store,
    private apiService: ApiService
  ) { }

  user: AuthModel = new AuthModel()
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {}

  onSubmit(signupForm: NgForm) {
    this.store.dispatch(authActions.signup({
      user: {
              UserEmailAddress: this.user.UserEmailAddress,
              UserPassword: this.user.UserPassword,
              UserName: this.user.UserName
            }
    }));
    console.log("..submitting")
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
