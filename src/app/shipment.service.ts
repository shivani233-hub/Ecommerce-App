import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentDataService {

  constructor(private http: HttpClient) { }

  // Method to fetch shipment details from JSON file
  getShipmentDetails(): Observable<any> {
    return this.http.get('assets/shipment-details.json');
  }
}
