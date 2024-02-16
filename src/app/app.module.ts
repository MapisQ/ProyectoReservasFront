import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

// Servicios y otros
import { CommonModule, DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './model/Home/home/home.component';
import { LoginComponent } from './model/Home/login/login.component';
import { SigninComponent } from './model/Home/signin/signin.component';
import { AboutUsComponent } from './model/Home/about-us/about-us.component';
import { RestaurantHomeComponent } from './model/restaurant/restaurant-home/restaurant-home.component';
import { FavoritesComponent } from './model/restaurant/favorites/favorites.component';
import { BookingsComponent } from './model/restaurant/bookings/bookings.component';
import { MyBookingsComponent } from './model/restaurant/my-bookings/my-bookings.component';
import { DatePipePipe } from './model/restaurant/date-pipe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModelModule } from './model/model.module';
import { RestaurantModule } from './model/restaurant/restaurant.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './model/Home/Cors/Interceptors/interceptor.interceptor';

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
    MyBookingsComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ModelModule,
    RestaurantModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}