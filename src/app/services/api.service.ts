import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, AuthModel, Application, Recommendation } from '../models';
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

  setLocalStorage(response) {
    localStorage.setItem("role",response.user_role);
    localStorage.setItem("userId",response.UserId);
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("refresh_token", response.refresh_token);
  }


  redirectAuthenticated(){
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1000);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getRole(): string {
    return localStorage.getItem('role');
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  //    (  AUTH ENDPOINTS  )    //

  signup(data: any): Observable<AuthModel> {
    const url = this.BASE_URL+"user/registration";
    return this.http.post<AuthModel>(url, data);
  }

  login(data: User): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    return this.http.post(url, data);
    this.router.navigate(['/apply-for-leave']);
  }

  logout(): Observable<any> {
    const userId = this.getUserId()
    const url = `${this.BASE_URL}/user/logout/${userId}`;
    // localStorage.removeItem('token')
    // this.router.navigate(['/sign-in']);
    return this.http.delete(url);
  }

  recoverPassword(data: any): Observable<any> {
    const p_url = data.url
    const url = `${this.BASE_URL}/user/forgot_password_email_request${p_url}`;
    return this.http.post(url, data);
  }

  storePassword(data: any): Observable<any> {
    const userId = data.userId
    const url = `${this.BASE_URL}/user/store_updated_password/${userId}`;
    return this.http.post(url, data);
  }


  //    (  PROFILE ENDPOINTS  )    //

  editProfile(data: any): Observable<any> {
    const userId = data.userId
    const url = `${this.BASE_URL}/user/edit_profile/${userId}`;
    return this.http.put(url, data);
  }

  uploadProfilePicture(data: any): Observable<any> {
    const userId = data.userId
    const url = `${this.BASE_URL}/user/upload_profile_picture/${userId}`;
    return this.http.put(url, data);
  }

  getProfilePicture(data: any): Observable<any> {
    const userId = data.userId
    const url = `${this.BASE_URL}/user/get_profileImage/${userId}`;
    return this.http.put(url, data);
  }

  //    (  APPLICATION ENDPOINTS  )    //

  addApplication(data: Application): Observable<any> {
    const url = `${this.BASE_URL}/apiv1/apply_for_leave`;
    return this.http.post(url, data);
  }

  editApplication(data: any): Observable<any> {
    const applicationId = data.applicationId
    const url = "/apiv1/update_leave_application/";
    return this.http.put(this.BASE_URL + url + applicationId, data);
  }

  editApplicationAddress(data: any): Observable<any>  {
    const applicationId = data.applicationId
    const addressId = data.addressId
    const url = `${this.BASE_URL}/apiv1/update_leave_application_address_details/`
    return this.http.put(url + applicationId + "/" + addressId, data);
  }

  getAllApplications() {
    const url = `${this.BASE_URL}/apiv1/get_all_applications`
    return this.http.get(url);
  }

  getUserApplications(): Observable<any> {
    const userId = this.getUserId()
    const url = `${this.BASE_URL}/apiv1/get_user_applications/${userId}`
    return this.http.get(url);
  }

  getSingleApplication(applicationId: any) {
    const url = "/apiv1/get_single_application/"
    return this.http.get(this.BASE_URL + url + applicationId);
  }

  computeApplication(data: any): Observable<any> {
    const applicationId = data.applicationId
    const url = `${this.BASE_URL}/apiv1/compute_application/${applicationId}`;
    return this.http.put(url, data);
  }

  approveApplication(data: any): Observable<any> {
    const applicationId = data.applicationId
    const url = `${this.BASE_URL}/apiv1/approve_application/${applicationId}`;
    return this.http.put(url, data);
  }

  addRecommendation(data: Recommendation): Observable<any> {
    const applicationId = data.applicationId
    const url = `${this.BASE_URL}/apiv1/add_recommendation/${applicationId}`;
    return this.http.post(url, data);
  }



}
