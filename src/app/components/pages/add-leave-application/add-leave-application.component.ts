import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-leave-application',
  templateUrl: './add-leave-application.component.html',
  styleUrls: ['./add-leave-application.component.css']
})
export class AddLeaveApplicationComponent implements OnInit {

  constructor() { }

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

}
