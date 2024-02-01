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
  selector:String ='null';

  constructor(private _service:RestaurantServiceService){
    this.restaurants = this._service.restaurants;
    //console.log(this.restaurants); 
    console.log(this.selector);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['restaurantName']);
      this.selectedRImg = decodeURIComponent(params['restaurantImg']);
    });
  }

  valueSelected(){
    if(this.selector !== 'null'){
      //console.log('El valor seleccionado es:', this.selector)
    }

  }
  

}
