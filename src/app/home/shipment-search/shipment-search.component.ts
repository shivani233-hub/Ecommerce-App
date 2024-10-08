import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.scss']
})
export class ShipmentSearchComponent implements OnInit {
  searchForm: FormGroup;
  screenSize: string = 'desktop';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {

    this.checkScreenSize(window.innerWidth);
    this.searchForm = this.fb.group({
      order: [''],
      shipment: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {}

  // shipment-search.component.ts
onSearch(): void {
  const searchValues = this.searchForm.value;
  this.searchShipments(searchValues).subscribe(results => {
    localStorage.setItem('shipments', JSON.stringify(results));
    if (results.length === 1) {
      this.router.navigate(['/shipment/shipment-details', results[0].ShipmentNo]);
    } else {
      this.router.navigate(['/shipment/shipment-results']);
    }
  });
}

  
  private searchShipments(values: any): Observable<any[]> {
    const apiUrl = 'assets/shipment-list.json';
    return this.http.get<any>(apiUrl).pipe(
      map(data => data.Shipments.Shipment.filter((item: any) => {
        return (!values.order || item.OrderNo.toLowerCase() === values.order.toLowerCase()) &&
               (!values.shipment || item.ShipmentNo.toLowerCase() === values.shipment.toLowerCase()) &&
               (!values.firstName || item.BillToAddress.FirstName.toLowerCase() === values.firstName.toLowerCase()) &&
               (!values.lastName || item.BillToAddress.LastName.toLowerCase() === values.lastName.toLowerCase()) &&
               (!values.email || item.BillToAddress.EmailID.toLowerCase() === values.email.toLowerCase()) &&
               (!values.phone || item.BillToAddress.DayPhone === values.phone);
      }))
    );
  }

  onReset(): void {
    this.searchForm.reset();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number): void {
    if (width <= 768) {
      this.screenSize = 'mobile';
    } else if (width > 768 && width <= 1024) {
      this.screenSize = 'tablet';
    } else {
      this.screenSize = 'desktop';
    }
  }
}
