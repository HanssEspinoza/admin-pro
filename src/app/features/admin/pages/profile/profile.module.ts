import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TitleCardComponent,
    InputTextComponent,
    BtnComponent,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
