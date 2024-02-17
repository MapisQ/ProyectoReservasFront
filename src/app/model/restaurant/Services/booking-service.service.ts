import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { DatePipePipe } from '../date-pipe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { stateReservationMapping } from '../Enums/StateBooking';
import { DatePipe} from '@angular/common';
import { HoursPipePipe } from '../hours-pipe.pipe';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  datePipe=inject(DatePipe);
  constructor(private http:HttpClient) { }

  userEmail: string = '';
  bookingTime:string='';
  private readonly URL = 'http://localhost:8080/api/v1'
  
   getTokenEmail(email: string):string{
    return this.userEmail = email;
  }

  private bookingState(state: string): string {
    // Verificar si la clave existe en el mapeo
    if (stateReservationMapping.hasOwnProperty(state)) {
      // Devolver el valor mapeado
      //return stateReservationMapping[state];
      return state;
    } else {
      // Si no está mapeado, podrías devolver un valor predeterminado o lanzar un error
      throw new Error(`Estado no válido: ${state}`);
    }
  }

  sendBookingInfo(bookingDate:HoursPipePipe, description: string, state: string): Observable<any> {
    const stateReservation = this.bookingState(state);
  
    if (description === '') {
      description = 'N/A';
    }
    const body = { bookingDate,description, stateReservation};
    return this.http.post(`${this.URL}/booking/saveBooking`, body)
      .pipe(
        tap(() => {
//          this.router.navigate(['/MyBookings']);
          console.log('BODY: ', body)
        })
      );
  }
}
