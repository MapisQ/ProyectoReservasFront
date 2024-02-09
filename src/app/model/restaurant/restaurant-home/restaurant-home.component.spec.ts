import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RestaurantHomeComponent } from './restaurant-home.component';
import { HomeComponent } from '../../Home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { AboutUsComponent } from '../../Home/about-us/about-us.component';

describe('Restaurant-Home-Component', () => {
  let component: RestaurantHomeComponent;
  let fixture: ComponentFixture<RestaurantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantHomeComponent,], 
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent},  {path:'Favorites', component:FavoritesComponent},
      {path:'MyBookings/:selectedRName/:selectedRImg/:formBooking', component:MyBookingsComponent}, {path:'AboutUs', component:AboutUsComponent},{path:'RestaurantHome', component:RestaurantHomeComponent},{path:'Bookings/:restaurantName/:restaurantImg', component:BookingsComponent}])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RestaurantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe RestaurantHome component', () => {
    const fixture = TestBed.createComponent(RestaurantHomeComponent);
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

  it('Agrega Restaurante a favoritos', () => {
    const link = fixture.debugElement.query(By.css('#favoriteIcon'));
    link.nativeElement.click();
    fixture.detectChanges();

    expect(component.addToFavorites).toBeTruthy();
  });

  it('Me redirecciona a bookings', () => {
    const link = fixture.debugElement.query(By.css('#bookingIcon'));
    link.nativeElement.click();
    fixture.detectChanges();

    expect(component.selectedComponents).toBeTruthy()
});

it('Me redirecciona a AboutUs', async () => {
    const link = fixture.debugElement.query(By.css('#LinkAboutUs'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/AboutUs');

  });

});