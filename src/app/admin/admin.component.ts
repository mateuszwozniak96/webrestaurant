import { Component, OnInit } from '@angular/core';
import { Dish } from '../entities';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;
  dish: Dish;

  constructor() { }

  ngOnInit() {
    this.setChild(1);
  }
  setChild(id: number) {
    this.id = id;
  }
  setDish(dish: Dish): void {
    this.dish = dish;
    this.id = 2;
  }
}
