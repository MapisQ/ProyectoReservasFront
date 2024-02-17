import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service';
import { myBookingInterface } from 'src/app/MyBookingInterface';
import { ApiServiceService } from '../../Home/ServicesHome/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {

  api=inject(ApiServiceService);
  myBookingsList: myBookingInterface[] = [];
  selectedRName = '';
  selectedRImg = '';
  formValues: myBookingInterface[] = [];
  valueInput = false;
    router: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantServiceService
  ) {}

  ngOnInit(): void {
    this.myBookingsList = this.restaurantService.restaurants;

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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Se ha presentado un error al regitrar la reserva"
          });
          //onsole.error('Error parsing formBooking JSON:', error);
        }
      }
    });
  }

  logOut() {
    this.api.logout();
  }
}
