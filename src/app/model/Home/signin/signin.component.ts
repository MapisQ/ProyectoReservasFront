import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiSigninServiceService } from '../ServicesHome/api-signin-service.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  router = inject(Router);
  api=inject(ApiSigninServiceService);
  http=inject(HttpClient);

  Login(){
    this.router.navigate(['/Login']);
  }
  Signin(){
    this.router.navigate(['/Signin']);
  }

  signinForm:FormGroup;

  constructor(private _builder:FormBuilder){
    this.signinForm = this._builder.group({
      name:['', [Validators.minLength(4), Validators.required]],
      lastName:['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      document: ['', [Validators.min(10)]]
    })
  }

  signinValues(){
    const values = this.signinForm.value;
    console.log(values);
  }

  submitSignin(): void {
    const { name, lastName, document, email, password } = this.signinForm.value;
    console.log('form values', this.signinForm.value);
    this.api.sendsigninCredentialsUser(name, lastName, document, email, password)
    .subscribe(response =>{
      console.log('Registro completado con exito ', response);
    }, error =>{
      console.log('Error al iniciar sesion', error);
    })
  }
  
}
