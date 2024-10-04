import { Component } from '@angular/core';
import { OrderDTO } from '../model/OrderDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  orderSummary: OrderDTO;
  obj: any;
  total: any;
  showDialog: boolean = false;

  constructor(private route: ActivatedRoute, private orderService: OrderServiceService, private router: Router){}

  ngOnInit(){
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;

    this.total = this.orderSummary.foodItemsList.reduce((acc, cur)=>{
      return acc + (cur.quantity*cur.price);
    }, 0);
  }

  saveOrder(){
    this.orderService.saveOrder(this.orderSummary)
    .subscribe(
      res => {
        this.showDialog = true;
      }
    );
  }
  closeDialog(){
    this.showDialog = false;
    this.router.navigate(['/']);
  }
}
