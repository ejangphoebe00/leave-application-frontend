import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { AddLeaveApplicationComponent } from './components/pages/add-leave-application/add-leave-application.component';
import { ComputeApplicationComponent } from './components/pages/compute-application/compute-application.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EditLeaveApplicationComponent } from './components/pages/edit-leave-application/edit-leave-application.component';
import { EditProfileComponent } from './components/pages/edit-profile/edit-profile.component';
import { ListAllApplicationsComponent } from './components/pages/list-all-applications/list-all-applications.component';
import { ListSingleApplicationComponent } from './components/pages/list-single-application/list-single-application.component';
import { ListSingleUserApplicationsComponent } from './components/pages/list-single-user-applications/list-single-user-applications.component';
import { PasswordResetEmailComponent } from './components/pages/password-reset-email/password-reset-email.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: AuthComponent, children:[
    { path: 'sign-in', component: LoginComponent },
    { path: 'sign-up', component: RegisterComponent },
  ] },
  { path: '', component: BaseComponent, children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'apply-for-leave', component: AddLeaveApplicationComponent },
    { path: 'edit-leave-application/:application-id', component: EditLeaveApplicationComponent },
    { path: 'compute-leave-application/:application-id', component: ComputeApplicationComponent },
    { path: 'edit-profile/:user-id', component: EditProfileComponent },
    { path: 'list-all-applications', component: ListAllApplicationsComponent },
    { path: 'list-single-application/:application-id', component: ListSingleApplicationComponent },
    { path: 'user-applications/:user-id', component: ListSingleUserApplicationsComponent },
    { path: 'forgot-password-page', component: PasswordResetEmailComponent },
    { path: 'reset-password-page', component: PasswordResetComponent },
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
