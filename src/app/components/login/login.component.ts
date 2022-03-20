import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/models/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { login } from 'src/app/store/actions/auth.actions';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AuthModel = new AuthModel();
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.user.UserEmailAddress)
    // this.store.dispatch(new LogIn(this.user));
    const payload = this.user
    this.store.dispatch(login(payload));

  }

}
