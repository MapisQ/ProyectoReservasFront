import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly URL = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.URL}/auth/authenticate`, body, { responseType: 'text' })
      .pipe(
        tap((token: string) => {
          this.cookie.set('token', token, 1, '/');
          this.router.navigate(['/RestaurantHome']);
        })
      );
  }

  getToken(): string | null {
    return this.cookie.get('token');
  }

  logout(): void {
    this.cookie.delete('token', '/');
    this.router.navigate(['/Login']);
  }
}
