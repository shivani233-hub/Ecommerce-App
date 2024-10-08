import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentResultsComponent } from './shipment-results/shipment-resultscomponent';

const routes: Routes = [
  { path: 'shipment-results', component: ShipmentResultsComponent },
  { path: 'shipment-details/:shipmentNo', component: ShipmentDetailsComponent },
  { path: '', redirectTo: '/shipment-results', pathMatch: 'full' }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
