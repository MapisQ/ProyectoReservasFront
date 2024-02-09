import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../../Home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { AboutUsComponent } from '../../Home/about-us/about-us.component';
import { RestaurantHomeComponent } from '../restaurant-home/restaurant-home.component';
import { BookingsComponent } from '../bookings/bookings.component';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [FavoritesComponent,], 
        imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent}, {path:'Favorites', component:FavoritesComponent},
        {path:'MyBookings/:selectedRName/:selectedRImg/:formBooking', component:MyBookingsComponent}, {path:'MyBookings', component:MyBookingsComponent}, {path:'Bookings/:restaurantName/:restaurantImg', component:BookingsComponent}, {path:'AboutUs', component:AboutUsComponent},{path:'RestaurantHome', component:RestaurantHomeComponent}])],
       
    })
    .compileComponents();
        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Existe Favorites component', () => {
        const fixture = TestBed.createComponent(FavoritesComponent);
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

    /*it('Me redirecciona a Bookings', () => {
        const favorite = { name: 'Ko Asian Kitchen', img: 'https://salvio93.com/wp-content/uploads/2022/04/ko_1-min.png' };
        spyOn(component, 'selectedComponents');

        const linkElement = fixture.debugElement.query(By.css('#redirectBookings'));
        console.log(linkElement);
        linkElement.triggerEventHandler('click', null);
        expect(component.selectedComponents).toHaveBeenCalledWith(favorite.name, favorite.img);
      });*/

    /*it('Me quita el restaurante de favoritos',  async () => {
        const link = fixture.debugElement.query(By.css('#remove-restaurant'));
        link.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.removeToFavorites).toBeTruthy()
    });*/

    it('Me redirecciona a AboutUs', async () => {
        const link = fixture.debugElement.query(By.css('#LinkAboutUs'));
        link.nativeElement.click();
        fixture.detectChanges();

        await fixture.whenStable();
        expect(fixture.componentInstance.router.url).toBe('/AboutUs');
    });

});