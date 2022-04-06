import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  admin: boolean;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    if (this.apiService.getRole() == "Staff") {
      this.admin = true;
    }else{
      this.admin = false;
    }

  }

}
