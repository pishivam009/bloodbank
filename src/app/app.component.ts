import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloodbank';

  constructor(private http: HttpClient, private router: Router) { }

  rtr=this.router;
  dashboard(){
    if(sessionStorage.getItem('isLoggedIn')=='true'){
        if(sessionStorage.getItem('isAdmin')=='1'){
          this.router.navigate(['admin']);
        }else{
          this.router.navigate(['user']);
        }
    }else{
      this.router.navigate(['']);
    }
  }
  
  makeLogin(val:any){
    this.isLoggedIn=true;
  }

  doLogout() {
    sessionStorage.clear();
    this.isLoggedIn=false;
    this.router.navigate(['/']);
  }

  isLoggedIn: boolean = false;
  




}
