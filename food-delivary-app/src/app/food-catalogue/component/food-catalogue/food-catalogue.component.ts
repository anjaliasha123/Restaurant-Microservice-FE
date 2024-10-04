import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from 'src/app/shared/models/FoodCataloguePage';
import { FoodItem } from 'src/app/shared/models/FoodItem';
import { FoodItemService } from '../../service/food-item.service';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent {

  restaurantId: number;
  foodItemResponse: FoodCataloguePage;
  foodItemCart: FoodItem[];
  orderSummary: FoodCataloguePage;

  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.restaurantId = +params.get('id')!;
      }
    );
    this.getItemsByRestaurantId(this.restaurantId);
    this.foodItemCart = [];
  }

  getItemsByRestaurantId(restaurantId: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurantId).subscribe(
      data => {
        this.foodItemResponse = data;
        // console.log(this.foodItemResponse);
      }
    );
  }


  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id == food.id);
    if (index == -1) this.foodItemCart.push(food);
    else this.foodItemCart[index] = food;
  }
  decrement(food: any) {
    if(food.quantity > 0) food.quantity--;
    const index = this.foodItemCart.findIndex(item => item.id == food.id);
    if(food.quantity == 0){
      this.foodItemCart.splice(index, 1);
    }else this.foodItemCart[index] = food;
  }
  onCheckOut() {
    this.orderSummary = {
      foodItemsList: [],
      restaurant: null
    };
    this.orderSummary.foodItemsList = this.foodItemCart;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    // console.log(this.orderSummary);
    this.router.navigate(['/orderSummary'], {queryParams: {data : JSON.stringify(this.orderSummary)}});
  }

}
