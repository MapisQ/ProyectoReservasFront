import { Component, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favorites:restaurantInterface[]=[]

  constructor(private _service:RestaurantServiceService){
    this.favorites=this._service.FavoritesRestaurants

    console.log(this.favorites);
  }

  addToFavorites(restaurant:restaurantInterface){
    this._service.addToFavorites(restaurant);
    console.log(this.favorites);
  }

}
