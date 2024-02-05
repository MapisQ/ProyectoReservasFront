import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service';
import { restaurantInterface } from 'src/app/RestaurantInterface';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  route=inject(ActivatedRoute);
  
  myBooking:restaurantInterface[]=[]
  myBookings:restaurantInterface[]=[]
  selectedRName:string='';
  selectedRImg:string='';
  formValues:string='';
  valueInput:boolean = false;

  router=inject(Router);

  constructor(private _service:RestaurantServiceService){
    this.myBooking=this._service.FavoritesRestaurants

    console.log(this.myBooking);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['selectedRName']);
      this.selectedRImg = decodeURIComponent(params['selectedRImg']);
      this.formValues = decodeURIComponent(params['formValues']);
    });
  }
}
