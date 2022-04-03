import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from 'src/app/store';


@Component({
  selector: 'app-list-all-applications',
  templateUrl: './list-all-applications.component.html',
  styleUrls: ['./list-all-applications.component.css']
})
export class ListAllApplicationsComponent {

  applications: any[] = [];

  constructor(
    private readonly store: Store
  ) {
    this.store.select(fromRoot.getApplications).pipe(
        takeUntil(this.destroy$)
      ).subscribe(data => this.applications = data.applications);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {}

}
