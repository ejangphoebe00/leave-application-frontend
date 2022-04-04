import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from 'src/app/store';
import * as applicationActions from 'src/app/store/actions/application.actions';

@Component({
  selector: 'app-list-single-application',
  templateUrl: './list-single-application.component.html',
  styleUrls: ['./list-single-application.component.css']
})

export class ListSingleApplicationComponent {

  application: any;

  constructor(private readonly store: Store
    ) {
        this.store.select(fromRoot.getApplication).pipe(
            takeUntil(this.destroy$)
          ).subscribe(data => {
            this.application = data.application
          });

      }

  destroy$: Subject<boolean> = new Subject<boolean>();
  applicationId: number;
  ngOnInit(): void {
    // this.store.dispatch(applicationActions.getSingleApplication(this.applicationId));
    this.store.dispatch(applicationActions.getSingleApplication(1));

  }

}
