import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-password-reset-email',
  templateUrl: './password-reset-email.component.html',
  styleUrls: ['./password-reset-email.component.css']
})
export class PasswordResetEmailComponent implements OnInit {

  constructor(
    private apiService: ApiService
    
  ) { }

  ngOnInit(): void {
    this.apiService.viewingStatus();

  }

}
