import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from 'src/app/store';
import * as applicationActions from 'src/app/store/actions/application.actions';


@Component({
  selector: 'app-list-single-user-applications',
  templateUrl: './list-single-user-applications.component.html',
  styleUrls: ['./list-single-user-applications.component.css']
})
export class ListSingleUserApplicationsComponent {

  applications: any[] = [];

  constructor(private readonly store: Store
    ) {
        this.store.select(fromRoot.getApplications).pipe(
            takeUntil(this.destroy$)
          ).subscribe(data => {
            this.applications = data.applications
          });

      }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.store.dispatch(applicationActions.getUserApplications());
  }

}
