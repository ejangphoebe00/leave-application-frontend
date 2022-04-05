import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from 'src/app/store';
import * as applicationActions from 'src/app/store/actions/application.actions';
import * as authActions from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-edit-leave-application',
  templateUrl: './edit-leave-application.component.html',
  styleUrls: ['./edit-leave-application.component.css']
})
export class EditLeaveApplicationComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
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

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    const data = this.applicationForm.value;
    this.store.dispatch(applicationActions.createApplication({application: data}));
    this.applicationForm.reset();
  }
}
