import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  validatingForm: FormGroup;

  constructor() {
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
}
<button type="button" mdbBtn color="default" rounded="true" data-toggle="modal" data-target="#basicExample"
  (click)="frame.show()" mdbWavesEffect>Launch Modal
</button>
<div mdbModal #frame="mdbModal" class="modal fade left" id="frameModalTop" tabindex="-1" role="dialog"
  aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Subscribe</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="frame.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <mdb-icon fas icon="user" class="prefix grey-text"></mdb-icon>
          <input type="text" id="form3" class="form-control" [formControl]="subscriptionFormModalName" mdbInput
            mdbValidate>
          <label for="form3">Your name</label>
          <mdb-error
            *ngIf="subscriptionFormModalName.invalid && (subscriptionFormModalName.dirty || subscriptionFormModalName.touched)">
            Input invalid
          </mdb-error>
          <mdb-success
            *ngIf="subscriptionFormModalName.valid && (subscriptionFormModalName.dirty || subscriptionFormModalName.touched)">
            Input valid
          </mdb-success>
        </div>
        <div class="md-form mb-4">
          <mdb-icon fas icon="envelope" class="prefix grey-text"></mdb-icon>
          <input type="email" id="form2" class="form-control" [formControl]="subscriptionFormModalEmail"
            mdbInput mdbValidate>
          <label for="form2">Your email</label>
          <mdb-error
            *ngIf="subscriptionFormModalEmail.invalid && (subscriptionFormModalEmail.dirty || subscriptionFormModalEmail.touched)">
            Input invalid
          </mdb-error>
          <mdb-success
            *ngIf="subscriptionFormModalEmail.valid && (subscriptionFormModalEmail.dirty || subscriptionFormModalEmail.touched)">
            Input valid
          </mdb-success>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button mdbBtn color="indigo" class="waves-light" mdbWavesEffect>Send
          <mdb-icon far icon="paper-plane" class="ml-1"></mdb-icon>
        </button>
      </div>
    </div>
  </div>
</div>