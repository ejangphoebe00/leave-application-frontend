import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from 'src/app/store';
import * as applicationActions from 'src/app/store/actions/application.actions';
// import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-list-all-applications',
  templateUrl: './list-all-applications.component.html',
  styleUrls: ['./list-all-applications.component.css']
})
export class ListAllApplicationsComponent {

  applications: any[] = [];
  // isStaff: boolean;
  // isAdmin: boolean;
  // role: string;
  // isAuthenticated: boolean;

  constructor(
    // private apiService: ApiService,
    private readonly store: Store
  ) {
    this.store.select(fromRoot.getApplications).pipe(
        takeUntil(this.destroy$)
      ).subscribe(data => {
        this.applications = data.applications
      });
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.store.dispatch(applicationActions.getAllApplications());
    // console.log(this.apiService.getAccessToken());

  }
  // isAuthenticated = )
  // if(isAuthenticated){
  //   this.role = this.apiService.getRole()
  //   // if(role == "HR"){
  //   //   this.isAdmin=true;
  //   // }else{
  //   //   this.isAdmin= false;
  //   // }
  // }
    //
    // if(this.authservice.getRole()=="Staff"){
    //   this.isStaff=true;
    // }else{
    // this.isStaff= false;
    // }

}
