import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as applicationActions from 'src/app/store/actions/application.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-address-details',
  templateUrl: './edit-address-details.component.html',
  styleUrls: ['./edit-address-details.component.css']
})
export class EditAddressDetailsComponent implements OnInit {

  addressId: any;
  applicationId: any;

  constructor(
    private apiService: ApiService,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.apiService.viewingStatus();
  }

    // this.addressId =
    // this.applicationId =

    addressForm = new FormGroup({
        AddressDetail: new FormControl(),
        Telephone: new FormControl(),
        NextOfKinContact: new FormControl(),
    });


    onSubmit() {
      const data = this.addressForm.value;
      this.store.dispatch(applicationActions.editAddress({address: data}));
      localStorage.setItem('addressId', this.addressId);
      localStorage.setItem('applicationId', this.applicationId);
    }

}
