import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.css']
})
export class AddSampleComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  message:string = "";
  doAddSample(sample:any){
    console.log(sample);
    this.userService.addSample(sample).subscribe(data =>{this.message= data;});
  }

}
