import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

// import { AuthModel } from 'src/app/models';
import * as authActions from 'src/app/store/actions/auth.actions';
import * as fromRoot from 'src/app/store';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private readonly store: Store
  ) {
    this.store.select(fromRoot.userLogin).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('data::::', data);
      // if (data.isLoadingSuccess && data.result.status) {
      //   this.router.navigate(['/dashboard']);
      // }
    });
  }

  user: User = new User();
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    // console.log(this.user)
    this.store.dispatch(authActions.login({
      user: {
              UserEmailAddress: this.user.email,
              UserPassword: this.user.password
            }
    }));
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}

export class User {

  constructor(

  ) {  }

  public email: string;
  public password: string;

}
