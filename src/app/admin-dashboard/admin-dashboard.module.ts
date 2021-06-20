import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

import {MatTabsModule} from '@angular/material/tabs';
import { UpdateProfileModule } from '../update-profile/update-profile.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { SampleListComponent } from './sample-list/sample-list.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserListComponent,
    AddSampleComponent,
    SampleListComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatTabsModule,
    UpdateProfileModule,
    FormsModule
    
  ],
  exports: [UserListComponent]
})
export class AdminDashboardModule { }
