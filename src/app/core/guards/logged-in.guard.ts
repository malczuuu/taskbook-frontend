import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../api/security.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard {
  constructor(
    private securityService: SecurityService,
    private router: Router,
    private jwtHelperService: JwtHelperService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authenticated = this.securityService.isAuthenticated();
    let expired;
    try {
      expired = this.jwtHelperService.isTokenExpired();
    } catch (e) {
      expired = true;
    }
    if (!authenticated || expired) {
      this.securityService.clearSession();
      this.router.navigate(['/security/login']);
    }
    return authenticated;
  }
}
