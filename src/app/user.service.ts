import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindetails } from './logindetails';
import { Sample } from './sample';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  url: string ="http://localhost:8080";

  login(logindetails: Logindetails ):Observable<User>{
    return this.http.post<User>(this.url+"/login", logindetails);
  }

  signup(signupdetails: User):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addUser", signupdetails, { headers, responseType: 'text' as 'json'  });
    
  }

  userList():Observable<User[]>{
    return this.http.get<User[]>(this.url+"/users");
  }

  deleteUser(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/user/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  deleteSample(id: number):Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/bloodsample/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  addSample(sampleDetails: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addBloodSample", sampleDetails, { headers, responseType: 'text' as 'json'  });
    
  }

  samplesList():Observable<Sample[]>{
    return this.http.get<Sample[]>(this.url+"/bloodsamples");
  }
  samplesListByBloodGroup(bg:string):Observable<Sample[]>{
    return this.http.get<Sample[]>(this.url+"/bloodsample/"+bg);
  }

  makeAdmin(id: number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addAdmin/"+ id, { headers, responseType: 'text' as 'json'  });
  }

  revokeAdmin(id: number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/removeAdmin/"+ id, { headers, responseType: 'text' as 'json'  });
  }

 
}
