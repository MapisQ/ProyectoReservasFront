import { Component, OnInit, inject } from '@angular/core';
import { restaurantInterface } from 'src/app/RestaurantInterface';
import { RestaurantServiceService } from '../restaurant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myBookingInterface } from 'src/app/MyBookingInterface';
import { Observer } from 'rxjs';
import { BookingServiceInterceptor } from '../Services/booking-service.interceptor';

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
  formVal=inject(FormBuilder);
  service=inject(BookingServiceInterceptor);
  
  restaurants:restaurantInterface[]=[]
  valueInput:boolean = false;
  bookingTime:string='';

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
      bookingTime:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRName = decodeURIComponent(params['restaurantName']);
      this.selectedRImg = decodeURIComponent(params['restaurantImg']);
    });
  }

  bookingTimeFormat():string{
    const datePipe = new DatePipe('de-DE');
    return this.date.transform(this.bookingTime, 'HH:mm') ?? '';
    //console.log(this.date.transform(this.bookingTime, 'HH:mm') ?? '');
  }

  SigninBooking(selectedRName:string,selectedRImg:string, formBooking:HTMLAllCollection){
    this.router.navigate(['/MyBookings', encodeURIComponent(selectedRName), encodeURIComponent(selectedRImg),encodeURIComponent(JSON.stringify(formBooking))]);
    console.log(formBooking)
  }

  submitBooking():void{
    const {personsChairs,someEvent,bookingDate,typeEvent,bookingTime} = this.formBooking.value;
    console.log('booking values', this.formBooking.value);

    const observer: Observer<any> = {
      next: (response) => {
        console.log('Registro completado con exito ', response);
      },
      error: (error) => {
        console.log('Error al iniciar sesion', error);
      },
      complete: () => {
        // Este método se ejecutaría si el Observable se completa, si es necesario
      }
    };
  
    this.service.sendBooking(personsChairs,someEvent,bookingDate,typeEvent,bookingTime).subscribe(observer);
  }
}
