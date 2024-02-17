import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, SigninComponent], 
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent}])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe Login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Me redirecciona a Signin al dar click', () => {
    spyOn(component, 'Signin');
    const button = fixture.debugElement.query(By.css('#buttonS'));
    button.triggerEventHandler('click', null);
    expect(component.Signin).toHaveBeenCalled();
  });

  it('Me redirecciona a Login al dar click', () => {
    spyOn(component, 'Login');
    const button = fixture.debugElement.query(By.css('#buttonL'));
    button.triggerEventHandler('click', null);
    expect(component.Login).toHaveBeenCalled();

  });

  it('Me redirecciona a Home', async () => {
    const link = fixture.debugElement.query(By.css('.linkHome'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/Home');
  });

  it('Formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const userName = app.loginForm.controls['userName'];
    userName.setValue('mapis20');
    expect(app.loginForm.invalid).toBeTrue();
  });

  it('Formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const userName = app.loginForm.controls['userName'];
    const password = app.loginForm.controls['password'];
    userName.setValue('MapisQuito20');
    password.setValue('Mapis123456');
    expect(app.loginForm.valid).toBeTrue();
  });

});

