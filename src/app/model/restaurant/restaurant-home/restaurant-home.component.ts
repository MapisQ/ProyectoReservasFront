import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css']
})
export class RestaurantHomeComponent {

  router=inject(Router);

  restaurants:restaurantInterface[]=[]
  

  constructor(private _service:RestaurantServiceService){
    this.restaurants = this._service.restaurants;
    //console.log(this.restaurants); 
  }

  addToFavorites(restaurant:restaurantInterface){
    this._service.addToFavorites(restaurant);
  }

  selectedComponents(restaurantName: string, restaurantImg:string){
    this.router.navigate(['/Bookings', restaurantName,restaurantImg]);
    //console.log('El Nombre del restaurante en el que quieres reservas es:', restaurantName);
  }

}
