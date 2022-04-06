import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';

import { ApiService } from 'src/app/services/api.service';
import * as authActions from 'src/app/store/actions/auth.actions';
import * as fromRoot from 'src/app/store';
import { AuthModel } from 'src/app/models';

class ImageSnippet {
  constructor(
    public src: string,
    public file: File
  ) {}
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(
    private router: Router,
    private readonly store: Store,
    private apiService: ApiService
  ) { }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

    this.apiService.uploadProfilePicture(this.selectedFile.file).subscribe(
      (res) => {},
      (err) => {}
    )
  });
  reader.readAsDataURL(file)
  }

  ngOnInit(): void {
    this.apiService.viewingStatus();
  }


  profileForm = new FormGroup({
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
    const data = this.profileForm.value;
    this.store.dispatch(authActions.editProfile(data));
    // this.applicationForm.reset();
  }
}
