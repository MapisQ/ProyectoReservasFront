import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ModelModule } from './model/model.module';
import { RestaurantModule } from './model/restaurant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModelModule,
    RestaurantModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
