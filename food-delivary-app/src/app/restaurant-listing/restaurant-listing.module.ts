import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';
import { RestaurantListingComponent } from './component/restaurant-listing.component';


@NgModule({
  declarations: [
    RestaurantListingComponent
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule
  ]
})
export class RestaurantListingModule { }
