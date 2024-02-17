import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const noAuthRequired = [
      '/Home',
      '/Signin', 
      '/Login'
    ];
  
    const requiresAuth = !noAuthRequired.some(url => req.url.includes(url));
    
    if (requiresAuth) {
      const token = this.cookie.get('token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        const id: number = decodedToken.id_user;
        if (id) {
          // Modificar el cuerpo de la solicitud para agregar el id de usuario
          const bodyWithUserId = { ...req.body, user: { id: id } };
          //console.log(bodyWithUserId);
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }, body:bodyWithUserId
          });
        }
      }
    }
    return next.handle(req);
  }
}
