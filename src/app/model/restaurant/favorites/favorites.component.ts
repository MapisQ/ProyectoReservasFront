import { Component, Inject, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favorites:restaurantInterface[]=[]
  favRestaurant:restaurantInterface[]=[]
  valueInput:boolean = false; 
  router=inject(Router);

  constructor(private _service:RestaurantServiceService){
    this.favorites=this._service.FavoritesRestaurants

    console.log(this.favorites);
  }

  selectedComponents(restaurantName: string, restaurantImg:string){
    this.router.navigate(['/Bookings', restaurantName,restaurantImg]);
    //console.log('El Nombre del restaurante en el que quieres reservas es:', restaurantName);
  }
  
  removeToFavorites(restaurant: restaurantInterface) {
    const isAlreadyInFavorites = this.favorites.some(
      (favRestaurant) => favRestaurant === restaurant
    );
  
    if (isAlreadyInFavorites) {
      // Si ya es favorito, quitarlo de la lista
      this.favorites = this.favorites.filter(
        (favRestaurant) => favRestaurant !== restaurant
      );
    } else {
      // Si no es favorito, agregarlo a la lista
      //this.favorites = [...this.favorites, restaurant];
      alert('No tienes el resturante en favoritos')
    }
  }
  

}
