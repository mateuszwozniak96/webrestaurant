import { Dictionary } from './../entities';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Dish, User } from '../entities';
import { HttpService } from './../services/http.service';
import { UserService } from '../services/user.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-form-dish',
  templateUrl: './form-dish.component.html',
  styleUrls: ['./form-dish.component.css']
})
export class FormDishComponent implements OnInit {
  dish: Dish;
  dishId: number;

  dishTypes = ['', 'Danie główne', 'Zupa', 'Napój', 'Deser', 'Przystawka'];

  constructor(private httpService: HttpService, private route: ActivatedRoute, private userService: UserService,
    public dictionaryService: DictionaryService) {
    this.route.queryParams.subscribe(params => {
     this.dishId = +params['dishId'];
    });
  }
  ngOnInit() {
    if (this.dishId !== 0) {
      this.getDish(this.dishId);
    } else {
      this.dish = {
        dishName: '',
        dishPrice: 10,
        ingredients: '',
        description: '',
        dishType: {
          dishTypeId: 1,
          dishTypeName: ''
        },
        dishImage: ''
      };
    }
  }
 get diagnostic() { return JSON.stringify(this.dish); }

  updateDish() {
      this.httpService.addDish(this.dish).subscribe(dish => {
        console.log(dish);
      });
  }

  getDish(dishId: number) {
    this.httpService.getDish(1, dishId).subscribe(dish => {
      this.dish = dish;
    });
  }
}
