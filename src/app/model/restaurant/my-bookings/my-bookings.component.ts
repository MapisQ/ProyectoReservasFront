import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { myBookingInterface } from 'src/app/MyBookingInterface';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  route=inject(ActivatedRoute);
  router=inject(Router);

  myBookingsList:restaurantInterface[]=[];
  selectedRName:string='';
  selectedRImg:string='';
  formValues:myBookingInterface[]=[];
  valueInput:boolean = false;

  constructor(private _service:RestaurantServiceService){
    this.myBookingsList=this._service.restaurants;
    //console.log(this.myBookingsList);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['selectedRName']);
      this.selectedRImg = decodeURIComponent(params['selectedRImg']);
      const formBookingValues = JSON.parse(decodeURIComponent(params['formBooking']));
      
      if (Array.isArray(formBookingValues)) {
        this.formValues = formBookingValues.map(value => {
          value.someEvent = value.someEvent === 'false';
          value.typeEvent = value.typeEvent === '' ? 'N/A' : value.typeEvent; // Si typeEvent está vacío, se establece como 'N/A'
          return value;
        });
      } else {
        formBookingValues.someEvent = formBookingValues.someEvent === 'true';
        formBookingValues.typeEvent = formBookingValues.typeEvent === '' ? 'N/A' : formBookingValues.typeEvent; // Si typeEvent está vacío, se establece como 'N/A'
        this.formValues = [formBookingValues];
      }
    });
  }
  
}
