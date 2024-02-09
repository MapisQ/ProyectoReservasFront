import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../../Home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { AboutUsComponent } from '../../Home/about-us/about-us.component';
import { RestaurantHomeComponent } from '../restaurant-home/restaurant-home.component';
import { DatePipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

describe('BookingsComponent', () => {
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsComponent,], 
      imports: [FormsModule, ReactiveFormsModule,MatRadioModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent},  {path:'Favorites', component:FavoritesComponent},
      {path:'MyBookings/:selectedRName/:selectedRImg/:formBooking', component:MyBookingsComponent}, {path:'AboutUs', component:AboutUsComponent},{path:'RestaurantHome', component:RestaurantHomeComponent}])],
      providers: [DatePipe]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe Bookings component', () => {
    const fixture = TestBed.createComponent(BookingsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Me redirecciona a RestaurantHome (Inicio)', async () => {
    const link = fixture.debugElement.query(By.css('#linkHome'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/RestaurantHome');
  });

 /* it('Me redirecciona a MyBookings (Mis Reservas)', async () => {
    const link = fixture.debugElement.query(By.css('#linkMyBookings'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/MyBookings');
  }); */

  it('Me redirecciona a Favorites (mis Favoritos)', async () => {
    const link = fixture.debugElement.query(By.css('#linkMyFavorites'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/Favorites');
  });

  it('Me redirecciona a Home (Cerrar Sesión)', async () => {
    const link = fixture.debugElement.query(By.css('#linkLogOut'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/Home');
  });

  it('Formulario invalido', () => {
    const fixture = TestBed.createComponent(BookingsComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const personsChairs = app.formBooking.controls['personsChairs'];
    const someEvent = app.formBooking.controls['someEvent'];
    const typeEvent = app.formBooking.controls['typeEvent'];
    const bookingDate = app.formBooking.controls['bookingDate'];
    personsChairs.setValue(2);
    someEvent.setValue('False');
    typeEvent.setValue('Cumpleaños');
    bookingDate.setValue('2024/02/22');
    expect(app.formBooking.invalid).toBeTrue();
  });

  it('Formulario valido', () => {
    const fixture = TestBed.createComponent(BookingsComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const personsChairs = app.formBooking.controls['personsChairs'];
    const someEvent = app.formBooking.controls['someEvent'];
    const typeEvent = app.formBooking.controls['typeEvent'];
    const bookingDate = app.formBooking.controls['bookingDate'];
    const bookingTime = app.formBooking.controls['bookingTime'];
    personsChairs.setValue(2);
    someEvent.setValue('False');
    typeEvent.setValue('Cumpleaños');
    bookingDate.setValue('2024/02/22');
    bookingTime.setValue('12:30');
    expect(app.formBooking.valid).toBeTrue();
  });

  it('Me redirecciona a MyBookings', () => {
    const link = fixture.debugElement.query(By.css('.button'));
    link.nativeElement.click();
    fixture.detectChanges();

    expect(component.SigninBooking).toBeTruthy()
});

it('Me redirecciona a AboutUs', async () => {
    const link = fixture.debugElement.query(By.css('#LinkAboutUs'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/AboutUs');

  });

});