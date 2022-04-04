import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, AuthModel, Application } from '../models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  login(data: User): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    return this.http.post(url, data);
    this.router.navigate(['/apply-for-leave']);
  }

  logout(): Observable<any> {
    const userId = this.getUserId()
    const url = `${this.BASE_URL}/user/logout/${userId}`;
    localStorage.removeItem('token')
    this.router.navigate(['/sign-in']);
    return this.http.delete(url);
  }

  signup(email: string,
     password: string): Observable<AuthModel> {
    const url = this.BASE_URL+"user/registration";
    return this.http.post<AuthModel>(url, {email, password});
  }

  addApplication(data: Application): Observable<any> {
    const url = `${this.BASE_URL}/apiv1/apply_for_leave`;
    console.log("THIS IS THE PAYLOAD")
    console.log(data)
    console.log(this.getAccessToken())
    return this.http.post(url, data);
  }

  getAllApplications() {
    const url = `${this.BASE_URL}/apiv1/get_all_applications`
    return this.http.get(url);
  }


  getUserApplications(): Observable<any> {
    const userId = this.getUserId()
    console.log("THIS IS THE USER ID", userId)
    const url = `${this.BASE_URL}/apiv1/get_user_applications/${userId}`
    return this.http.get(url);
  }


  getSingleApplication(applicationId: any): Observable<any> {
    // const url = `${this.BASE_URL}/apiv1/get_single_application/${applicationId}`
    const url = `${this.BASE_URL}/apiv1/get_single_application/2`
    return this.http.get(url);
  }

  editApplication(payload: any) {
    return this.http.put(this.BASE_URL + 'apiv1/application', {payload});
  }

  deleteApplication(applicationId: any) {
    console.log('deleting task:::', applicationId);
    return this.http.delete(`${this.BASE_URL}/application/${applicationId}`);
  }


}
