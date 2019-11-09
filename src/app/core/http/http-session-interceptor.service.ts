import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityService } from '../api/security.service';

@Injectable()
export class HttpSessionInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.securityService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.securityService.getSession()}`
        }
      });
    }
    return next.handle(request);
  }
}
