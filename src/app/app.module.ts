import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BaseComponent } from './components/base/base.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EditProfileComponent } from './components/pages/edit-profile/edit-profile.component';
import { PasswordResetEmailComponent } from './components/pages/password-reset-email/password-reset-email.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { AddLeaveApplicationComponent } from './components/pages/add-leave-application/add-leave-application.component';
import { EditLeaveApplicationComponent } from './components/pages/edit-leave-application/edit-leave-application.component';
import { EditAddressDetailsComponent } from './components/pages/edit-address-details/edit-address-details.component';
import { ListSingleUserApplicationsComponent } from './components/pages/list-single-user-applications/list-single-user-applications.component';
import { ListSingleApplicationComponent } from './components/pages/list-single-application/list-single-application.component';
import { ListAllApplicationsComponent } from './components/pages/list-all-applications/list-all-applications.component';
import { ComputeApplicationComponent } from './components/pages/compute-application/compute-application.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    BaseComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    EditProfileComponent,
    PasswordResetEmailComponent,
    PasswordResetComponent,
    AddLeaveApplicationComponent,
    EditLeaveApplicationComponent,
    EditAddressDetailsComponent,
    ListSingleUserApplicationsComponent,
    ListSingleApplicationComponent,
    ListAllApplicationsComponent,
    ComputeApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
