import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './model/Home/home/home.component';
import { LoginComponent } from './model/Home/login/login.component';
import { SigninComponent } from './model/Home/signin/signin.component';
import { AboutUsComponent } from './model/Home/about-us/about-us.component';
import { RestaurantHomeComponent } from './model/restaurant/restaurant-home/restaurant-home.component';
import { FavoritesComponent } from './model/restaurant/favorites/favorites.component';
import { BookingsComponent } from './model/restaurant/bookings/bookings.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MyBookingsComponent } from './model/restaurant/my-bookings/my-bookings.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Login', component:LoginComponent},
  {path:'Signin', component:SigninComponent},
  {path:'AboutUs', component:AboutUsComponent},
  {path:'RestaurantHome', component:RestaurantHomeComponent},
  {path:'Favorites', component:FavoritesComponent},
  {path:'MyBookings', component:MyBookingsComponent, pathMatch:'full'},
  {path:'MyBookings/:selectedRName/:selectedRImg/:formBooking', component:MyBookingsComponent},
  {path:'Bookings/:restaurantName/:restaurantImg', component:BookingsComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
