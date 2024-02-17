import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../../Home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { AboutUsComponent } from '../../Home/about-us/about-us.component';
import { RestaurantHomeComponent } from '../restaurant-home/restaurant-home.component';
import { BookingsComponent } from '../bookings/bookings.component';

describe('MyBookingsComponent', () => {
    let component: MyBookingsComponent;
    let fixture: ComponentFixture<MyBookingsComponent>;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [MyBookingsComponent], 
        imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent}, {path:'Favorites', component:FavoritesComponent},
        {path:'Bookings/:restaurantName/:restaurantImg', component:BookingsComponent}, {path:'MyBookings', component:MyBookingsComponent, pathMatch:'full'}, {path:'AboutUs', component:AboutUsComponent},{path:'RestaurantHome', component:RestaurantHomeComponent}])]
    })
    .compileComponents();
        fixture = TestBed.createComponent(MyBookingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Existe MyBookings component', () => {
        const fixture = TestBed.createComponent(MyBookingsComponent);
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

     it('Me redirecciona a MyBookings (Mis Reservas)', async () => {
        const link = fixture.debugElement.query(By.css('#linkMyBookings'));
        link.nativeElement.click();
        fixture.detectChanges();

        await fixture.whenStable();
        expect(fixture.componentInstance.router.url).toBe('/MyBookings');
    }); 

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

    it('Me redirecciona a AboutUs', async () => {
        const link = fixture.debugElement.query(By.css('#LinkAboutUs'));
        link.nativeElement.click();
        fixture.detectChanges();

        await fixture.whenStable();
        expect(fixture.componentInstance.router.url).toBe('/AboutUs');
    });

});