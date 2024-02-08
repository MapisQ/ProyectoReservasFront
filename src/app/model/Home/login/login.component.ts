import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router);
  
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

}
