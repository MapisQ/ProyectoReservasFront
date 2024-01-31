import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { SigninComponent } from './Home/signin/signin.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModelModule { }
