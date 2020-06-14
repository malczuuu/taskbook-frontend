import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../api/security.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authenticated = this.securityService.isAuthenticated();
    if (authenticated) {
      this.router.navigate(['/']);
    }
    return !authenticated;
  }
}
