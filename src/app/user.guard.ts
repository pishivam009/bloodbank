import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate():boolean {
    if(sessionStorage.getItem("isLoggedIn")=='true'||sessionStorage.getItem("isAdmin")=='1'){
      return true;
    }else{
      alert("Not Logged In");
      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
