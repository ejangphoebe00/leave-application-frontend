import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';


import * as fromRoot from 'src/app/store';
import * as applicationActions from 'src/app/store/actions/application.actions';

@Component({
  selector: 'app-list-single-application',
  templateUrl: './list-single-application.component.html',
  styleUrls: ['./list-single-application.component.css']
})


export class ListSingleApplicationComponent {

  application: any;
  validatingForm: FormGroup;

  constructor(
    private readonly store: Store,
    private apiService: ApiService
    ) {
        this.store.select(fromRoot.getApplication).pipe(
            takeUntil(this.destroy$)
          ).subscribe(data => {
            this.application = data.application
          });

         this.validatingForm = new FormGroup({
             subscriptionFormModalName: new FormControl('', Validators.required),
             subscriptionFormModalEmail: new FormControl('', Validators.email)
           });

      }

  get subscriptionFormModalName() {
    return this.validatingForm.get('subscriptionFormModalName');
  }

  get subscriptionFormModalEmail() {
    return this.validatingForm.get('subscriptionFormModalEmail');
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  applicationId: number;
  data: any;

  ngOnInit(): void {
    this.apiService.viewingStatus();
    this.store.dispatch(applicationActions.getSingleApplication(this.applicationId));
  }

  compute(): void {
    this.store.dispatch(applicationActions.computeApplication(this.data));
  }

  addRecommendation(): void {
    this.store.dispatch(applicationActions.addRecommendation(this.data));
  }

}
