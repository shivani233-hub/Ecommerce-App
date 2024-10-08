import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShipmentDataService } from 'src/app/shipment.service';

@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrls: ['./shipment-results.component.scss']
})
export class ShipmentResultsComponent implements OnInit {
  showFilterMenu: boolean = false;
  selectedStatuses: Set<string> = new Set<string>();
  screenSize: string = 'desktop';
  results: any[] = [];
  visibleResults: any[] = [];
  selectedShipment: any;
  loading: boolean = false;
  itemsPerPage: number = 10;
  availableStatuses: string[] = [];
  isFilterApplied: boolean = false; 
  tempSelectedStatuses: Set<string> = new Set<string>();

  constructor(private router: Router, private route: ActivatedRoute, private shipmentService: ShipmentDataService) {
    this.checkScreenSize(window.innerWidth);
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const storedResults = localStorage.getItem('shipments');
      if (storedResults) {
        this.results = JSON.parse(storedResults);
        this.visibleResults = [...this.results];
        this.loadMoreShipments();
        window.addEventListener('scroll', this.onScroll.bind(this));
      
       this.availableStatuses = this.results.some(item => item.DeliveryMethod === 'SHP')
          ? ['Ready for Backroom Pick', 'Backroom Pick In Progress', 'Ready for Packing', 'Packing In Progress', 'Packed', 'Shipped', 'Cancelled']
          : ['Ready for Backroom Pick', 'Backroom Pick In Progress', 'Ready for Customer Pickup', 'Picked', 'Cancelled'];
      }
    });
  }

  isStatusTemporarilySelected(status: string): boolean {
    return this.tempSelectedStatuses.has(status);
  }

  toggleStatusTempFilter(status: string): void {
    if (this.isStatusTemporarilySelected(status)) {
      this.tempSelectedStatuses.delete(status);
    } else {
      this.tempSelectedStatuses.add(status);
    }
  }

  isFilterActive(): boolean {
    return this.selectedStatuses.size > 0;
  }

  goBack(): void {
    this.router.navigate(['/previous-page']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  viewDetails(event: Event, shipmentNo: string): void {
    event.stopPropagation(); 
    this.router.navigate(['/shipment-details', shipmentNo]);
  }
  

  highlightPanel(shipment: any): void {
    this.selectedShipment = shipment;
  }

  loadMoreShipments(): void {
    const nextResults = this.results.slice(this.visibleResults.length, this.visibleResults.length + this.itemsPerPage);
    this.visibleResults = [...this.visibleResults, ...nextResults];
    this.loading = false;
  }

  onScroll(): void {
    if (this.loading) return;
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      this.loading = true;
      this.loadMoreShipments();
    }
  }

  toggleFilterMenu(): void {
    this.showFilterMenu = !this.showFilterMenu;
  }

  closeFilterMenu(): void {
    this.showFilterMenu = false;
    this.selectedStatuses.clear();
    this.visibleResults = [...this.results];
  }

  applyFilters(): void {
    if (this.selectedStatuses.size > 0) {
      this.isFilterApplied = true;  
      this.visibleResults = this.results.filter(result =>
        this.selectedStatuses.has(result.Status)
      );
    } else {
      this.isFilterApplied = false;  
      this.loadMoreShipments();
    }
  }

  resetFilter(): void {
    this.selectedStatuses.clear();
    this.isFilterApplied = false; 
    this.visibleResults = [...this.results];
  }

  toggleStatusFilter(status: string): void {
    if (this.isStatusSelected(status)) {
      this.selectedStatuses.delete(status);
    } else {
      this.selectedStatuses.add(status);
    }
  }

  isStatusSelected(status: string): boolean {
    return this.selectedStatuses.has(status);
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
