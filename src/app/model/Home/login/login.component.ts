import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ApiServiceService } from '../ServicesHome/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router);
  api=inject(ApiServiceService);
  http=inject(HttpClient);
  
  Login(){
    this.router.navigate(['/Login']);
  }
  Signin(){
    this.router.navigate(['/Signin']);
  }
  loginForm:FormGroup;

  constructor(private _builder:FormBuilder){
    this.loginForm = this._builder.group({
      userName:['', [Validators.email, Validators.required]],
      password:['', [Validators.minLength(8), Validators.required]]
    })
  }

  submit(loginForm:FormGroup){
    const {userName, password} = this.loginForm.value;
    //console.log('form values', loginForm.value);
    //console.log('Usuario y contraseña',userName,password);
    this.api.sendCredentials(userName, password).subscribe({
      next:(response)=> {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Has iniciado sesión",
          showConfirmButton: false,
          timer: 1000
        });
        //console.log('Sesión iniciada', response);
      }, error: (error)=> {
        //console.log(userName, password);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email o contraseña incorrectos"
        });
      }
    })
  }
}
