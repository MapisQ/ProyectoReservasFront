import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSigninServiceService {

  constructor(private cookie:CookieService, private router: Router, private http: HttpClient) {
    console.log('Servicio Registro conectado');
  }
  private readonly URL = 'http://localhost:8080/api/v1'

  sendsigninCredentialsUser(name: string,lastName:string, document:string, email:string, password: string): Observable<any> {
    const body = { name, lastName, document, email, password };
    return this.http.post(`${this.URL}/auth/register`, body, { responseType: 'text' })
      .pipe(
        tap((tokenRes: any) => {
          //this.cookie.set('token', tokenRes, 1, '/');
          this.router.navigate(['/Login']);
        })
      );
  }

}
