import { MenuOrderService } from './../services/menu-order.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Dish, User } from './../entities';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  dishes: Array<Dish> = [];
  dish: Dish = new Dish();
  id  = 1;
  dishTypeId: number;
  isAdmin: boolean;
  searchDish: string;
  amount = 1;
  user: User;
  @Output()
  eventDish = new EventEmitter<Dish>();

  @Output()
  addDishEmit = new EventEmitter<Dish>();
  constructor( private httpService: HttpService, private route: ActivatedRoute, private menuOrderService: MenuOrderService,
                    private userSerive: UserService) {

    }

    ngOnInit() {
      this.getDishes();
      this.initDish();
      this.route.queryParams.subscribe(params => {
        if (params['isAdmin'] === 'true') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      });
      this.searchDish = '';
      this.user = this.userSerive.getUser();
    }
    ngOnChanges() {
      if (this.searchDish !== '') {
       this.httpService.getDishesByString(this.searchDish).subscribe(dishes => {
         this.dishes = dishes;
       });
      }
      console.log(this.searchDish);
    }

  setAdmin(isAdmin) {
    this.isAdmin = isAdmin;
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

  delete(dish: number) {
    this.httpService.deleteDish(dish).subscribe();
    window.location.reload();
  }
  addToOrder(dish: Dish, amount: number) {
    this.menuOrderService.addOrderDetails(dish, amount);
  }
  initDish() {
    this.dish.dishImage = 'https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2017/12/19735-v-900x556.jpg';
    this.dish.description = 'Pyszne pierożki jak u konrada ';
    this.dish.ingredients = 'Maka, Ziemniaki, Cebula, Twarog, Woda';
  }
  incAmount() {
      this.amount = this.amount + 1;
  }
  decAmount() {
    if (this.amount > 0) {
      this.amount = this.amount - 1;
  }
}
}

