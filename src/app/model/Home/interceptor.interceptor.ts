import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private cookie:CookieService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Lista de endpoints que no requieren token
        const noAuthRequired = [
          '/Home',
          // otros endpoints si es necesario
        ];
      
        const requiresAuth = !noAuthRequired.some(url => req.url.includes(url));
      
        if (requiresAuth) {
          const token = this.cookie.get('token');
          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });
          }
        }
        return next.handle(req);
  }
}
