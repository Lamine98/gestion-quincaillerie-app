import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(public auth: TokenService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    
    if (!this.auth.isLoggedIn() || User !== expectedRole) 
    {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}