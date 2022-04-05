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
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    // private apiService: ApiService,
    private readonly store: Store
  ) {
    this.store.select(fromRoot.getApplications).pipe(
        takeUntil(this.destroy$)
      ).subscribe(data => {
        this.applications = data.applications;
        this.dtTrigger.next();
      });
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.store.dispatch(applicationActions.getAllApplications());
      this.dtOptions = {
        dom:'Bfrtip',
        buttons: [

          {
            extend:'print',
            tag: 'button',
            className: "btn yellow btn-outline"
          },
          {
            extend:'excel',
            tag: 'button',
            className: "btn green btn-outline"
          },
          {
            extend:'pdf',
            tag: 'button',
            className: "btn red btn-outline"
          },
        ],

      }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
