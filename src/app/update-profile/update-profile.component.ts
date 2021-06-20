import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private http: HttpClient,private userService: UserService) { }

  ngOnInit(): void {
  }


 id: string|null=sessionStorage.getItem("userId");
 name: string|null=sessionStorage.getItem("userName");
 isAdmin: string|null=sessionStorage.getItem("isAdmin");
 address: string|null=sessionStorage.getItem("userAddress");
 email: string|null=sessionStorage.getItem("userEmail");
 contact:string|null=sessionStorage.getItem("userContact")

  message:any ="";

  doUpdate(signupDetails:User) { 
    //signupDetails.isAdmin=false;
    if(confirm("Are you sure you want to update the details?")){
      this.userService.signup(signupDetails).subscribe(
        (data) =>{this.message = data;
          //console.log(signupDetails)
          //console.log("message="+this.message)
        }
      );
    }
   

    
  }

}
