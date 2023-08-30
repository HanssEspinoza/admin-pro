import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
