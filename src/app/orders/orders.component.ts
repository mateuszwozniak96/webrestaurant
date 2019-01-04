import { UserService } from './../services/user.service';
import { OrderTable, OrderDetail } from './../entities';
import { HttpService } from './../services/http.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<OrderTable>;
  tempOrder: OrderTable;
  orderDetails: Array<OrderDetail>;
  hideOdebrane: false;
  hideDetails: false;
  showToday: false;



 orderStatus = ['zlozone', 'Gotowe do odbioru', 'Odebrane'];
  constructor(private httpService: HttpService, private userService: UserService) {
      this.httpService.getOrders().subscribe(orders => {
        this.orders = orders;
      });
      this.httpService.getOrderDetails().subscribe(orderDetails => {
        this.orderDetails = orderDetails;
      });
   }

  ngOnInit() {
  }


  updateOrder(order: OrderTable) {
    this.httpService.updateOrder(order).subscribe();

  }
  getDetails() {

  }

}
