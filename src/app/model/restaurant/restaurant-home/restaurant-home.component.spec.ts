import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RestaurantHomeComponent } from './restaurant-home.component';
import { HomeComponent } from '../../Home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { BookingsComponent } from '../bookings/bookings.component';

describe('Restaurant-Home-Component', () => {
  let component: RestaurantHomeComponent;
  let fixture: ComponentFixture<RestaurantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantHomeComponent,], 
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent},  {path:'Favorites', component:FavoritesComponent},
      {path:'MyBookings/:selectedRName/:selectedRImg/:formBooking', component:MyBookingsComponent},{path:'Bookings/:restaurantName/:restaurantImg', component:BookingsComponent}])]
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

  it('Me redirecciona a Home', async () => {
    const link = fixture.debugElement.query(By.css('#linkLogOut'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/Home');
  });

});