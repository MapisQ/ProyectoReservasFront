import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { By } from '@angular/platform-browser';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent, LoginComponent], 
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes([{path:'Home', component: HomeComponent}])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe Signin component', () => {
    const fixture = TestBed.createComponent(SigninComponent);
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

  it('Me redirecciona a Home', async () => {
    const link = fixture.debugElement.query(By.css('.linkHome'));
    link.nativeElement.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(fixture.componentInstance.router.url).toBe('/Home');
  });

  it('Formulario invalido', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const name = app.signinForm.controls['name'];
    const lastName = app.signinForm.controls['lastName'];
    const document = app.signinForm.controls['document'];
    const email = app.signinForm.controls['email'];
    const userName = app.signinForm.controls['userName'];

    name.setValue('Maria Paula');
    lastName.setValue('Barbosa Quito');
    document.setValue('1027280453');
    email.setValue('mapis2321@gmail.com');
    userName.setValue('MapisQuito20');
    expect(app.signinForm.invalid).toBeTrue();
  });

  it('Formulario valido', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const name = app.signinForm.controls['name'];
    const lastName = app.signinForm.controls['lastName'];
    const document = app.signinForm.controls['document'];
    const email = app.signinForm.controls['email'];
    const userName = app.signinForm.controls['userName'];
    const password = app.signinForm.controls['password'];

    name.setValue('Maria Paula');
    lastName.setValue('Barbosa Quito');
    document.setValue('1027280453');
    email.setValue('mapis2321@gmail.com');
    userName.setValue('MapisQuito20');
    password.setValue('Mapis123456');
    expect(app.signinForm.valid).toBeTrue();
  });

});