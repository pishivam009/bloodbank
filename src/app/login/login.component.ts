import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Logindetails } from '../logindetails';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

 

  data: User = new User();
  message: string = "";
  doLogin(formValue: Logindetails) {
    this.userService.login(formValue).subscribe(
      (val: User) => {
        this.data = val;
        //console.log(val);

        if (val.id > 0) {

          sessionStorage.setItem("userId", val.id.toString());
          sessionStorage.setItem("userContact", val.contact);
          sessionStorage.setItem("userName", val.name);
          sessionStorage.setItem("isAdmin", val.isAdmin.toString());
          sessionStorage.setItem("userAddress", val.address);
          sessionStorage.setItem("userEmail", val.email);
          sessionStorage.setItem("isLoggedIn", 'true');
        
          if (val.isAdmin == 1) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['user']);
          }
          this.message = "Login successful";
    
        } else {
          this.message = "Invalid Credentials";
        }
    
      }
    );
    

  }


  ngOnInit(): void {
  }

}
