import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as applicationActions from 'src/app/store/actions/application.actions';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-add-leave-application',
  templateUrl: './add-leave-application.component.html',
  styleUrls: ['./add-leave-application.component.css']
})
export class AddLeaveApplicationComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private apiService: ApiService

  ) { }

  ngOnInit(): void {
    this.apiService.viewingStatus();
  }

  add() {
    let addressRow = document.createElement('div');
      addressRow.className = 'row';
      addressRow.innerHTML = `
      <hr>
      <div class="col-6 form-group">
        <label>Address Details</label>
        <input type="text" class="form-control" placeholder="eg. ntinda,kampala">
      </div>

      <div class="col-6 form-group">
        <label>Telephone</label>
        <input type="tel" class="form-control" placeholder="eg. +256 770088007">
      </div>

      <div class="col-6 form-group">
        <label>Next of Kin Contact</label>
        <input type="text" class="form-control" placeholder="eg. +256 770088007">
      </div>`;
      document.querySelector('.displayFields').appendChild(addressRow);
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
    this.store.dispatch(applicationActions.createApplication({application: data}));
    this.applicationForm.reset();
  }


}
