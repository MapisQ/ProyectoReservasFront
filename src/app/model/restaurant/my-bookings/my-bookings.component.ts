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

  myBookingsList:restaurantInterface[]=[];
  selectedRName:string='';
  selectedRImg:string='';
  formValues:myBookingInterface[]=[];
  valueInput:boolean = false;

  router=inject(Router);

  constructor(private _service:RestaurantServiceService){
    this.myBookingsList=this._service.restaurants;
    //console.log(this.myBookingsList);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['selectedRName']);
      this.selectedRImg = decodeURIComponent(params['selectedRImg']);
      const formValuesFormat = JSON.parse(decodeURIComponent(params['formValuesFormat']));
      console.log(this.formValues);

      if(Array.isArray(formValuesFormat)){
        this.formValues=formValuesFormat;
      }else{
        this.formValues = [formValuesFormat];
      }
    });
  }
}
