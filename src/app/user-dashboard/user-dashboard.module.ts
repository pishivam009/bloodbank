import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';

import {MatTabsModule} from '@angular/material/tabs';
import { UpdateProfileModule } from '../update-profile/update-profile.module';
import { ViewBloodAvailabilityComponent } from './view-blood-availability/view-blood-availability.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UserDashboardComponent,
    ViewBloodAvailabilityComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatTabsModule,
    UpdateProfileModule,
    MatSelectModule,
    FormsModule
    
    
  ]
})
export class UserDashboardModule { }
