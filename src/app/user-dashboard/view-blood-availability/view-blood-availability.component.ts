import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sample } from 'src/app/sample';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-blood-availability',
  templateUrl: './view-blood-availability.component.html',
  styleUrls: ['./view-blood-availability.component.css']
})
export class ViewBloodAvailabilityComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  active=false;
samplelist:Sample[]=[];

bloodGroup:string=""

setBloodGroup(bloodGroup:string){
  this.bloodGroup = bloodGroup;
  this.viewSampleByBloodGroup(bloodGroup);
}
  
  refreshedOn:string="";

  viewSampleByBloodGroup(bgForm:any){
    this.active=true;
    this.refreshedOn=Date.now().toString();
    //console.log(bgForm.getString('bloodGroup'));
    //console.log(JSON.stringify(bgForm));
    console.log(this.bloodGroup);
    this.userService.samplesListByBloodGroup(this.bloodGroup).subscribe(data =>{this.samplelist = data;})
  }

  bgs=['A+','A-','B+','B-','AB+','AB-','O+','O-']

  ngOnInit(): void {
  }

}
