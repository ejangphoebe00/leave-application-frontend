import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: BaseComponent,
      children: [
        {path: '', component: DashboardComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
