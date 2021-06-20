import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }


  list: User[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getUserList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.userService.userList().subscribe(
      (data) => { this.list = data; }

    );
  }


  doDelete(id: number): void {
    if (confirm("Are you sure you want to delete this")) {
      this.userService.deleteUser(id).subscribe((data) => {
        this.getUserList();
      });
      


    }
  }
  doMakeAdmin(id: number) {
    if (confirm("Are you sure you want to give admin rights")) {
      this.userService.makeAdmin(id).subscribe((data) => {
        this.getUserList();
      });


    }
  }

  doRevokeAdmin(id: number) {
    if (confirm("Are you sure you want to revoke admin rights")) {
      this.userService.revokeAdmin(id).subscribe((data) => {
        this.getUserList();
      });


    }
  }

}
