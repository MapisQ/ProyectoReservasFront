import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoursPipePipe } from './hours-pipe.pipe';

@NgModule({
  declarations: [
  
    HoursPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }
