import { Dictionary } from './../entities';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MenuOrderService } from '../services/menu-order.service';
import { OrderDetail, OrderTable } from '../entities';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../services/user.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails: OrderDetail[] = [];
  order: OrderTable;
  orderId: number;
  userOrders: OrderTable[] = [];
  constructor(private httpService: HttpService, private menuOrderService: MenuOrderService, private userService: UserService,
    public dictionaryService: DictionaryService) {
  }

  ngOnInit() {
       this.orderDetails = this.menuOrderService.getOrderDetails();
       this.order = this.menuOrderService.getOrder();
       this.httpService.getOrdersByuserId(this.userService.user.userId).subscribe(orders => {
         this.userOrders = orders;
       });
      }

  addOrder() {
    return this.httpService.addOrder(this.order).subscribe(orderId => {
      this.orderId = orderId;
      this.order.orderId = orderId;
      this.orderDetails.forEach(orderDetail => {
        orderDetail.orderTable = this.order;
        this.httpService.addOrderDetail(orderDetail).subscribe();
      });
      console.log(this.orderId);
    });
  }



  delete(orderDetail) {
    this.menuOrderService.deleteOrderDetails(orderDetail);
    this.orderDetails  = this.menuOrderService.getOrderDetails();
    this.menuOrderService.setValue();
  }


}
