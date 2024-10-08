import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShipmentSearchComponent } from './shipment-search/shipment-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ShipmentSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
