import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service';
import { myBookingInterface } from 'src/app/MyBookingInterface';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  route=inject(ActivatedRoute);
  router=inject(Router);

  myBookingsList:myBookingInterface[]=[];
  selectedRName:string='';
  selectedRImg:string='';
  formValues:myBookingInterface[]=[];
  valueInput:boolean = false;

  constructor(private _service:RestaurantServiceService){
    this.myBookingsList=this._service.restaurants;
    //console.log(this.myBookingsList);
  }

  ngOnInit(): void {
    this.myBookingsList = this._service.restaurants;

    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['selectedRName']) || '';
      this.selectedRImg = decodeURIComponent(params['selectedRImg']) || '';

      if (params['formBooking'] !== undefined) {
        try {
          const formBookingValues = JSON.parse(decodeURIComponent(params['formBooking']));

          if (Array.isArray(formBookingValues)) {
            console.log(formBookingValues);
            this.formValues = formBookingValues.map(value => {
              value.someEvent = value.someEvent === 'false';
              value.typeEvent = value.typeEvent === '' ? 'N/A' : value.typeEvent;
              value.bookingDate = new Date();
              return value;
            });
          } else {
            formBookingValues.someEvent = formBookingValues.someEvent === 'true';
            formBookingValues.typeEvent = formBookingValues.typeEvent === '' ? 'N/A' : formBookingValues.typeEvent;
            formBookingValues.bookingDate = new Date();
            this.formValues = [formBookingValues];
          }
        } catch (error) {
          console.error('Error parsing formBooking JSON:', error);
          // Manejar el error como desees
        }
      }
    });
  }
  
}
