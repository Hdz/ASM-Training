import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
 export class AuthGuard implements CanActivate {
 
  constructor(private _authService: AuthService, private _router: Router) {
  }
 ​
  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isLoggedIn) {
        return true;
    }
      return !this._authService.isLoggedIn;

    // navigate to login page

  }
 ​
 }