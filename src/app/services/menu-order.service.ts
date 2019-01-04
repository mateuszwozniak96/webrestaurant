import { UserService } from './user.service';
import { OrderTable, OrderDetail, Dish } from './../entities';
import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class MenuOrderService {
  orderDetails: Array<OrderDetail> = [];
  orderDetail: OrderDetail;
  order: OrderTable;
  constructor(private userService: UserService) {
    this.initOrder();
    this.initOrderDetail();
  }

  addOrderDetails(dish: Dish, amount: number) {

      this.orderDetail.dish = dish;

      this.orderDetail.dishAmount = amount;
      this.orderDetail.orderTable = this.order;
      this.orderDetails.push(this.orderDetail);
      this.initOrderDetail();
      this.initOrder();
      this.setValue();
  }
  getOrderDetails() {
    return this.orderDetails;
  }
  deleteOrderDetails(orderDetail: OrderDetail) {
    this.orderDetails = this.orderDetails.filter(obj => obj !== orderDetail);
  }
  setOrder(order: OrderTable) {
      this.order = order;
  }
  getOrder() {
    return this.order;
  }
  cleanOrderDetails() {
    this.orderDetails = [];
  }
  initOrder() {
    this.order = {
      'value': 20,
      'user': this.userService.getUser(),
      'status': {
          'statusId': 1,
          'statusName': ''
      },
      'dateTime': new Date()
  };
  }
  initOrderDetail() {
    this.orderDetail = {
      'orderTable': {
          'orderId': 1,
          'value': 20,
          'user': this.userService.getUser(),
          'status': {
              'statusId': 3,
              'statusName': 'odebrane'
          },
          'dateTime': new Date(),
      },
      'dish': {
          'dishId': 2,
          'dishName': 'Pierogi z kapusta i grzybami',
          'dishPrice': 12.11,
          'ingredients': 'Kapusta, grzyby, mąka, woda',
          'description': 'Najlepsze pierożki z grzybkami i kapustą',
          'dishType': {
              'dishTypeId': 1,
              'dishTypeName': 'Danie glowne'
          }
      },
      'dishAmount': 1
  };

  }
  setValue() {
    this.order.value = 0;
    this.orderDetails.forEach(orderDetail => {
      this.order.value = this.order.value + (orderDetail.dish.dishPrice * orderDetail.dishAmount);
    });
  }
}
