import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {jwtDecode} from "jwt-decode";
import { BookingServiceService } from 'src/app/model/restaurant/Services/booking-service.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private cookie:CookieService, private service:BookingServiceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Lista de endpoints que no requieren token
        const noAuthRequired = [
          '/Home',
          '/Signin', 
          '/Login'
        ];
      
        const requiresAuth = !noAuthRequired.some(url => req.url.includes(url));
      
        if (requiresAuth) {
          const token = this.cookie.get('token');
          if (token) {
            // Decodificar el token JWT
            const decodedToken: any = jwtDecode(token);
            // Acceder al email desde el token decodificado
            const email: string = decodedToken.sub;
            //console.log('Email extraído del token:', email);
    
            this.service.getTokenEmail(email);
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
