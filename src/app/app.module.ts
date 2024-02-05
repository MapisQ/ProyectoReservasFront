import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ModelModule } from './model/model.module';
import { RestaurantModule } from './model/restaurant/restaurant.module';
import { HomeComponent } from './model/Home/home/home.component';
import { LoginComponent } from './model/Home/login/login.component';
import { AboutUsComponent } from './model/Home/about-us/about-us.component';
import { SigninComponent } from './model/Home/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantHomeComponent } from './model/restaurant/restaurant-home/restaurant-home.component';
import { FavoritesComponent } from './model/restaurant/favorites/favorites.component';
import { BookingsComponent } from './model/restaurant/bookings/bookings.component';
import { MatRadioModule } from '@angular/material/radio';
import { MyBookingsComponent } from './model/restaurant/my-bookings/my-bookings.component';
import { CommonModule, DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AboutUsComponent,
    RestaurantHomeComponent,
    FavoritesComponent,
    BookingsComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModelModule,
    RestaurantModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
