import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {AuthServiceService} from './auth-service.service';

@Injectable()
export class AuthGuard  implements CanActivate{
  constructor(private authservice: AuthServiceService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authservice.currentUserValue;
    if (!currentUser) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
