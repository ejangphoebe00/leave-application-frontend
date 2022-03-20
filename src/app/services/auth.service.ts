import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthModel } from '../models/auth.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
    ) {}

  getAccessToken(): string {
    return localStorage.getItem('access-token');
  }

  logIn(payload: AuthModel): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    console.log(payload)
    return this.http.post<AuthModel>(url, {payload});
  }

  signUp(email: string,
     password: string): Observable<AuthModel> {
    const url = `${this.BASE_URL}/user/registration`;
    return this.http.post<AuthModel>(url, {email, password});
  }
}
