import { Component, OnInit, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  route=inject(ActivatedRoute);  

  restaurants:restaurantInterface[]=[]
  selectedRName:string='';
  selectedRImg:string='';

  constructor(private _service:RestaurantServiceService){
    this.restaurants = this._service.restaurants;
    //console.log(this.restaurants); 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = params['name'];
      this.selectedRImg = params['img'];
    });
  }

}
