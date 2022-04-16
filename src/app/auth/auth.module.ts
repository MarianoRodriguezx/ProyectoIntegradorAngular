import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialsModule } from './materials.module';
import { LostpassComponent } from './pages/lostpass/lostpass.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LostpassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
