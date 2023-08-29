import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared';

import { DashboardComponent } from './dashboard';
import { GraficalComponent } from './grafical';
import { ProgressComponent } from './progress';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    GraficalComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
