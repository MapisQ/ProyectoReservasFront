import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookingsComponent } from './bookings/bookings.component';



@NgModule({
  declarations: [
    RestaurantHomeComponent,
    FavoritesComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestaurantModule { }
