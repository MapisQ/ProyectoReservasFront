import { Component, OnInit, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myBookingInterface } from 'src/app/MyBookingInterface';
import { BookingServiceService } from '../Services/booking-service.service';
import { ApiServiceService } from '../../Home/ServicesHome/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  route=inject(ActivatedRoute); 
  date=inject(DatePipe);
  _build=inject(FormBuilder);
  router=inject(Router);
  service=inject(BookingServiceService)
  formVal=inject(FormBuilder);
  api=inject(ApiServiceService);
  
  datefinal:Date | undefined;
  restaurants:restaurantInterface[]=[]
  valueInput:boolean = false;
  bookingState:boolean=true;
  userEmail:string='';
  stateFinal:string='';

  selectedRName:string='';
  selectedRImg:string='';
  selector:String ='null';
  formValues:myBookingInterface[]=[]
  formBooking:FormGroup;

  constructor(private _service:RestaurantServiceService, _build:FormBuilder){
    this.restaurants = this._service.restaurants;
    //console.log(this.restaurants); 
    //console.log(this.selector);

    this.formBooking = _build.group({
      personsChairs:['',[Validators.min(1), Validators.required]],
      someEvent:['',[Validators.required]],
      bookingDate:['',[Validators.required]],
      typeEvent:['', Validators.minLength(2) ], 
      bookingTime:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['restaurantName']);
      this.selectedRImg = decodeURIComponent(params['restaurantImg']);
    });
  }

  submitBooking(selectedRName:string,selectedRImg:string, formBooking:HTMLAllCollection): void {
    const { bookingDate, bookingTime, typeEvent} = this.formBooking.value;    
    this.stateFinal = this.bookingState ? 'Active' : 'Cancelled';
    this.service.sendBookingInfo(bookingDate, bookingTime,  typeEvent, this.stateFinal)
    .subscribe(response =>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "La reserva ha sido guardada con exito",
        showConfirmButton: false,
        timer: 1000
      });
      //console.log('Reserva guardada con exito ', response);
      this.router.navigate(['/MyBookings', encodeURIComponent(selectedRName), encodeURIComponent(selectedRImg),encodeURIComponent(JSON.stringify(formBooking))]);
    }, error =>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible registrar la reserva"
      });
      //console.log('Error al realizar la reserva', error);
    })
  }

  logOut() {
    this.api.logout();
  }

  

}
