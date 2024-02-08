import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { By } from '@angular/platform-browser';
import { AboutUsComponent } from '../about-us/about-us.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, LoginComponent, SigninComponent], 
      imports: [RouterTestingModule.withRoutes([{path:'AboutUs', component: AboutUsComponent}])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe Home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });

  it('Me redirecciona a Login al dar click', () => {
    spyOn(component, 'Login');
    const button = fixture.debugElement.query(By.css('#buttonL'));
    button.triggerEventHandler('click', null);
    expect(component.Login).toHaveBeenCalled();

  });

  it('Me redirecciona a Signin al dar click', () => {
    spyOn(component, 'Signin');
    const button = fixture.debugElement.query(By.css('#buttonS'));
    button.triggerEventHandler('click', null);
    expect(component.Signin).toHaveBeenCalled();
  });

  it('Me redirecciona a AboutUs', async () => {
    const link = fixture.debugElement.query(By.css('#LinkAboutUs'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/AboutUs');

  });

});