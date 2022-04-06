import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(authActions.logout());
    console.log("passing")
  }

}
