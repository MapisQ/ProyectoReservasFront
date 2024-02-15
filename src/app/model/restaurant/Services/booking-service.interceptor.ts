import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DatePipePipe } from '../date-pipe.pipe';
import { Time } from '@angular/common';
import { userInterface } from 'src/app/userInterface';

@Injectable()
export class BookingServiceInterceptor implements HttpInterceptor {

  private readonly URL = 'http://localhost:8080/api/v1'

  constructor(private cookie:CookieService, private http:HttpClient, private router:Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

  sendBooking(bookingDate:DatePipePipe, bookingHour:Time, description:string, state:boolean, user:userInterface): Observable<HttpEvent<any>> {
    const body = {bookingDate, bookingHour, description, state, user};
    return this.http.post(`${this.URL}/booking/saveBooking`, body)
      .pipe(
        tap((tokenRes: any) => {
          console.log(tokenRes)
          //this.router.navigate(['/MyBookings']);
        })
      );
  }

}
