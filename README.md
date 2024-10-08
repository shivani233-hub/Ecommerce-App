# Shipment Management Application

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
