import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient,private userService: UserService) { }

  message:any ="";
  doSignup(signupDetails:User) { 
    //signupDetails.isAdmin=false;
    this.userService.signup(signupDetails).subscribe(
      (data) =>{this.message = data;
        //console.log(signupDetails)
        //console.log("message="+this.message)
      }
    );

    
  }
  
  ngOnInit(): void {
  }

}
