import { FormsModule } from '@angular/forms';
import { Dish } from './../entities';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Array<Dish> = [];
  dish: Dish;
  id  = 1;
  @Input()
  isAdmin: boolean;
  @Output()
  eventDish = new EventEmitter<Dish>();


  constructor(private httpService: HttpService) { }

  dishTypeId: number;

  setAdmin(isAdmin) {
    this.isAdmin = isAdmin;
  }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.httpService.getDishes().subscribe(dishes => {
      this.dishes = dishes;

    });
  }
  getDishesId(id: number) {
    this.httpService.getDishesId(id).subscribe(dishes => {
      this.dishes = dishes;
    });
  }
  getGlowne() {
    this.httpService.getGlowne().subscribe(dishes => {
      this.dishes = dishes;
    });
  }
  getZupy() {
    this.httpService.getZupy().subscribe(dishes => {
      this.dishes = dishes;
    });
  }
  getNapoje() {
    this.httpService.getNapoje().subscribe(dishes => {
      this.dishes = dishes;
    });
  }
  getDesery() {
    this.httpService.getDesery().subscribe(dishes => {
      this.dishes = dishes;
    });
  }
  getDetails(dish) {
    this.dish = dish;

  }
  update(dish: Dish) {
    this.dish = dish;
      this.eventDish.emit(this.dish);
  }
  addDish() {
    this.dish = {
      'dishName': ' ',
      'dishPrice': 10,
      'ingredients': ' ',
      'description': ' ',
      'dishType': {
          'dishTypeId': 1,
          'dishTypeName': ' '
      }
    };
    this.eventDish.emit(this.dish);
  }

  delete(dish: Dish) {
    this.httpService.deleteDish(dish).subscribe();
  }
}

