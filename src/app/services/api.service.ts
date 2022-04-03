import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthModel, Application } from '../models';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
    ) {}

  getAccessToken(): string {
    return localStorage.getItem('access-token');
  }

  login(payload: AuthModel): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    console.log(payload)
    return this.http.post(url, {payload});
  }

  signup(email: string,
     password: string): Observable<AuthModel> {
    const url = this.BASE_URL+"user/registration";
    return this.http.post<AuthModel>(url, {email, password});
  }

  addApplication(payload: any) {
    const url = this.BASE_URL + "/apiv1/apply_for_leave";
    // const application = {
    //   ApplicantLevel: "SENIOR",
    //   Designation: "IT",
    //   TypeOfLeave: "ANNUAL",
    //   NumberOfDaysNeeded: 14,
    //   ReturnDate: null ,
    //   LeaveCommencement: null,
    //   ApplicationDate: null,
    //   AddressDetails: "kampala",
    //   Telephone: "+256 788815149",
    //   NextofKinContact: "+256 768815149",
    // };
    console.log(payload)
    return this.http.post(url, payload);
  }

  getApplication(): Observable<any> {
    return this.http.get(this.BASE_URL + '/application');
  }

  getApplications() {
    return this.http.get(this.BASE_URL + '/application');
  }

  editApplication(payload: any) {
    return this.http.put(this.BASE_URL + 'apiv1/application', {payload});
  }

  deleteApplication(applicationId: any) {
    console.log('deleting task:::', applicationId);
    return this.http.delete(`${this.BASE_URL}/application/${applicationId}`);
  }


}
