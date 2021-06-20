import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sample } from 'src/app/sample';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }
active=false;
samplelist:Sample[]=[];

  ngOnInit(): void {
  }
  refreshedOn:string="";

  viewSampleList(){
    this.active=true;
    this.refreshedOn=Date.now().toString();
    this.userService.samplesList().subscribe(
      data => {this.samplelist=data;}
    )
  }
  deleteMessage:any=[];
  doDeleteSample(id:number){
    this.userService.deleteSample(id).subscribe(
      (data)=>{this.deleteMessage = data;
        console.log(this.deleteMessage);
        this.viewSampleList();
      }
    );
  }


}
