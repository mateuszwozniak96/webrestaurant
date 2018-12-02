import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Dish } from '../entities';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-form-dish',
  templateUrl: './form-dish.component.html',
  styleUrls: ['./form-dish.component.css']
})
export class FormDishComponent implements OnInit {
  @Input()
  dish: Dish;

  @Output()
  backEmitter = new EventEmitter<number>();
  dishTypes = ['', 'Danie główne', 'Zupa', 'Napój', 'Deser', 'Przystawka'];

  constructor(private httpService: HttpService) { }
  ngOnInit() {
 }

 get diagnostic() { return JSON.stringify(this.dish); }

  updateDish() {
      this.httpService.addDish(this.dish).subscribe(dish => {
        console.log(dish);
      });
  }

  back(id) {
    this.backEmitter.emit(id);
  }
}
