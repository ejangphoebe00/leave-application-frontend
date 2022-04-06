import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as applicationActions from 'src/app/store/actions/application.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-leave-application',
  templateUrl: './edit-leave-application.component.html',
  styleUrls: ['./edit-leave-application.component.css']
})
export class EditLeaveApplicationComponent implements OnInit {


  constructor(
    private readonly store: Store,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.viewingStatus()
  }


  applicationForm = new FormGroup({
    ApplicantLevel: new FormControl(),
    Designation: new FormControl(),
    TypeOfLeave: new FormControl(),
    NumberOfDaysNeeded: new FormControl(),
    ReturnDate: new FormControl(),
    LeaveCommencement: new FormControl(),
    ApplicationDate: new FormControl(),
    AddressDetail: new FormControl(),
    Telephone: new FormControl(),
    NextOfKinContact: new FormControl(),
  });

  // destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    const data = this.applicationForm.value;
    this.store.dispatch(applicationActions.editApplication({application: data}));
  }
}
