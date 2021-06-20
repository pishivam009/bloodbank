import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './user.service';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AdminDashboardModule,
    UserDashboardModule
  ],
  exports:[SignupComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
