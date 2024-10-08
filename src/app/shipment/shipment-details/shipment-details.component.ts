import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipmentDataService } from 'src/app/shipment.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {
  shipmentDetails: any;
  screenSize: string = 'desktop';
  shipmentNo: string | null = null;
  isLoading: boolean = true;
  error: string | null = null;
  isCollapsed: boolean = false; 

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentDataService, private router: Router) {}

  ngOnInit(): void {
    // Extract shipmentNo from route params
    this.route.paramMap.subscribe(params => {
      this.shipmentNo = params.get('shipmentNo');
      if (this.shipmentNo) {
        this.loadShipmentDetails();
      } else {
        this.error = 'No shipment number provided.';
        this.isLoading = false;
      }
    });
  }

  loadShipmentDetails(): void {
    this.shipmentService.getShipmentDetails().subscribe(data => {

      // Check if data is an array
      if (Array.isArray(data)) {
        // Find the shipment with the matching ShipmentNo
        const shipment = data.find(item => item.Shipment.ShipmentNo === this.shipmentNo);

        if (shipment) {
          this.shipmentDetails = shipment.Shipment;
          console.log(this.shipmentDetails.Status)
        } else {
          this.error = 'Shipment not found.';
        }
      } else {
        this.error = 'Invalid data format received.';
      }
      this.isLoading = false;
    }, err => {
      this.error = 'Error fetching shipment details.';
      this.isLoading = false;
    });
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
  toggleDetails(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goBack(): void {
    this.router.navigate(['/shipment/shipment-results']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
