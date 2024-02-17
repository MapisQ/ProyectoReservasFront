import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { DatePipePipe } from '../date-pipe.pipe';
import { stateReservationMapping } from '../Enums/StateBooking';
import { DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  datePipe=inject(DatePipe);
  constructor(private http:HttpClient) {}

  private readonly URL = 'http://localhost:8080/api/v1'

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

  sendBookingInfo(bookingDate:DatePipePipe,bookingHour:string, description: string, state: string): Observable<any> {
    const stateReservation = this.bookingState(state);
    if (description === '') {
      description = 'N/A';
    }
    const body = { bookingDate,bookingHour,description, stateReservation};
    return this.http.post(`${this.URL}/booking/saveBooking`, body)
      .pipe(
        tap(() => {
//          this.router.navigate(['/MyBookings']);
          //console.log('BODY: ', body)
        })
      );
  }
}
