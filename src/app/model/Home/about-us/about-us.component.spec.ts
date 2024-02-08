import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AboutUsComponent } from './about-us.component';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { By } from '@angular/platform-browser';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsComponent, LoginComponent, SigninComponent], 
      imports: [RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe AboutUs component', () => {
    const fixture = TestBed.createComponent(AboutUsComponent);
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

});
