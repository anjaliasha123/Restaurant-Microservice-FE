import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];

  ngOnInit(){
    this.getAllRestaurantsList();
  }
  constructor(private router: Router, private restaurantService: RestaurantService){}
  getAllRestaurantsList() {
    this.restaurantService.getAllRestaurants()
    .subscribe(
      data => this.restaurantList = data
    );
  }
  getRandomImage(): string {
    const imageCount = 3;
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`;
  }
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max-min+1) + min);
  }
  onButtonClick(id: number|undefined) {
    this.router.navigate(['/food-catalogue', id]);
  }

}
