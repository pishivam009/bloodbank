import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './admin-dashboard/user-list/user-list.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserDashboardComponent, canActivate:[UserGuard]},
  {
    path: 'admin', component: AdminDashboardComponent, canActivate:[AdminGuard],
    children: [
                { path: "users", component: UserListComponent },
                 { path: "signup", component: SignupComponent }
              ]
  },
  { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
