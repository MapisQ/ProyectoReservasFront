import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  router = inject(Router)

  Login(){
    this.router.navigate(['/Login']);
  }
  Signin(){
    this.router.navigate(['/Signin']);
  }

  signinForm:FormGroup

  constructor(private _builder:FormBuilder){
    this.signinForm = this._builder.group({
      name:['', [Validators.minLength(4), Validators.required]],
      lastName:['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      userName:['', [Validators.minLength(5), Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      document: ['', [Validators.min(10)]]
    })
  }

}
