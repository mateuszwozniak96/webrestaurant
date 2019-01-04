import { OrderDetail, OrderTable } from './../entities';
import { HttpService } from './../services/http.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Dish } from '../entities';
import { MenuOrderService } from '../services/menu-order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  orderDetails: OrderDetail[] = [];
  order: OrderTable;
  constructor(private httpService: HttpService, private menuOrderService: MenuOrderService,
            private userServie: UserService) { }

  ngOnInit() {
    this.orderDetails = this.menuOrderService.getOrderDetails();
    this.order = this.menuOrderService.getOrder();
  }

  continue() {
    this.menuOrderService.cleanOrderDetails();
  }
}
