import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BreadcrumbsComponent,
  SidebarComponent,
  HeaderComponent,
  FooterComponent
} from './';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
