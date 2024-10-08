import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentSearchComponent } from './home/shipment-search/shipment-search.component';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';
import { ShipmentResultsComponent } from './shipment/shipment-results/shipment-resultscomponent';

const routes: Routes = [
  {
    path: 'shipment-details/:shipmentNo',
    component: ShipmentDetailsComponent
  },

  { path: 'shipment-results', component: ShipmentResultsComponent },

  {
  
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'shipment',
  loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule)
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
