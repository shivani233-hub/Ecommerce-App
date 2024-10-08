import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShipmentResultsComponent } from './shipment-results/shipment-resultscomponent';


@NgModule({
  declarations: [
    ShipmentResultsComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ShipmentModule { }
