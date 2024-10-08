# Shipment Management Application

## Getting Started

### Prerequisites

- Node.js (version 14 or above) and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- Angular CLI installed globally. If you don’t have it installed, run:
  ```bash
  npm install -g @angular/cli

## Overview
This Angular application is designed to manage and search for shipment details. It features three main screens: a shipment search screen, a results screen, and a details screen. Users can easily find shipment records and view detailed information based on their searches.

## Features
- **Shipment Search Screen**: Allows users to search for shipments. If no input is provided, all shipment records are displayed.
- **Shipment Search Results Screen**: Displays the results of the search with pagination support using infinite scrolling.
- **Shipment Details Screen**: Provides detailed information about a selected shipment, including delivery method and expected dates.

## Tech Stack
- **Frontend**: Angular 15+
- **Styling**: SCSS, Bootstrap 5, ng-bootstrap v12.x or above, Flexbox
- **Localization**: ngx-translate for internationalization and localization
- **Icons**: SVG and font icons

## Modules
- **Home Module**: Contains the shipment search screen and is lazy-loaded.
- **Shipment Module**: Contains the results and details screens and is lazy-loaded.

## Responsive Design
The application is styled for different devices:
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 767px
- **Desktop**: max-width: 1023px

## Localization
All static text is managed through JSON translation files using ngx-translate. For example:
```json
{
  "home": {
    "LABEL_WhatDoYouWantToDO": "What do you want to do?"
  }
}
```
## Mock Data

The application uses mock data to simulate shipment records. Below are the JSON structures used for the shipment list and shipment details.

### Shipment List JSON

```json
{
  "Shipments": {
    "TotalNumberOfRecords": "2",
    "Shipment": [
      {
        "AssignedToUserId": "abrooks",
        "DeliveryMethod": "SHP",
        "ExpectedShipmentDate": "27-10-2017",
        "OrderNo": "SFS1000001",
        "ScacAndService": "UPSNGround",
        "ShipmentNo": "SFS1000001SHPNO",
        "Status": "Cancelled",
        "BillToAddress": {
          "DayPhone": "123456789",
          "EMailID": "Zymer@org.com",
          "FirstName": "Ben",
          "LastName": "Zymer"
        },
        "ShipmentLines": {
          "TotalNumberOfRecords": "4"
        }
      },
      {
        "AssignedToUserId": "amgr",
        "DeliveryMethod": "PICK",
        "ExpectedShipmentDate": "28-10-2017",
        "OrderNo": "PICK1000001",
        "ScacAndService": "",
        "ShipmentNo": "PICK1000001SHPNO",
        "Status": "Ready for Backroom Pick",
        "BillToAddress": {
          "DayPhone": "1234567890",
          "EMailID": "adoyle@org.com",
          "FirstName": "Abby",
          "LastName": "Doyle"
        },
        "ShipmentLines": {
          "TotalNumberOfRecords": "6"
        }
      }
    ]
  }
}
