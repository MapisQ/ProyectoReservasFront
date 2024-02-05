import { Component, OnInit, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  route=inject(ActivatedRoute); 
  date=inject(DatePipe);
  _build=inject(FormBuilder);
  

  restaurants:restaurantInterface[]=[]
  valueInput:boolean = false; 
  bookingDate:string='';
  selectedRName:string='';
  selectedRImg:string='';
  selector:String ='null';
  formBooking:FormGroup;

  constructor(private _service:RestaurantServiceService, _build:FormBuilder){
    this.restaurants = this._service.restaurants;
    //console.log(this.restaurants); 
    console.log(this.selector);

    this.formBooking = _build.group({
      personsChairs:['',[Validators.min(1), Validators.required]],
      someEvent:['',[Validators.required]],
      typeEvent:['',[Validators.minLength(3), Validators.required]],
      bookingDate:['',[Validators.required]],
      bookingTime:['',[Validators.required]]
    })
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

  bookingDateFormat(){
    //return this.date.transform(this.bookingDate, 'dd/MM/yyyy') ?? '';
    console.log(this.date.transform(this.bookingDate, 'dd/MM/yyyy') ?? '');
  }


}
