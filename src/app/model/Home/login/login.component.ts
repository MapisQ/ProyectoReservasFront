import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ApiServiceService } from '../ServicesHome/api-service.service';
import { Credentials } from 'src/app/CredentialsInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router);
  api=inject(ApiServiceService);
  http=inject(HttpClient);
  email:string='';
  password:string='';
  
  Login(){
    this.router.navigate(['/Login']);
  }
  Signin(){
    this.router.navigate(['/Signin']);
  }
  loginForm:FormGroup;

  constructor(private _builder:FormBuilder){
    this.loginForm = this._builder.group({
      userName:['', [Validators.minLength(4), Validators.required]],
      password:['', [Validators.minLength(8), Validators.required]]
    })
  }

 /* formValues(){
    const values=this.loginForm.value;
    console.log(values);
  } */

  submit(loginForm:FormGroup){
    const {userName, password} = this.loginForm.value;
    console.log('form values', loginForm.value);
    this.api.sendCredentials(userName, password).subscribe({
      next:(response)=> {
        console.log('sesión iniciada', response);
      }, error: (error)=> {
        console.log(userName, password);
      }
    })
  }
}
