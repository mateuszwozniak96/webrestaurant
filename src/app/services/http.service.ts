import { OrderTable, Reservation, OrderDetail, Board } from './../entities';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish, User } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  id: number;
  users: string [];
  anything: any;
  private url = 'http://localhost:8080/users';
  dishesOrder: Dish[] = [];

  getDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes');
  }

  getDishesId(id): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes/' + id);
  }
  getDish(dishTypeId, dishId): Observable<Dish> {
    return this.http.get<Dish>('http://localhost:8080/dishes/' + dishTypeId + '/' + dishId);
  }
  getUser(userId): Observable<User> {
    return this.http.get<User>('http://localhost:8080/users/' + userId);
  }

  getGlowne(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes/1');
    }

 getZupy(): Observable<Array<Dish>> {
      return this.http.get<Array<Dish>>('http://localhost:8080/dishes/2');
      }
 getDesery(): Observable<Array<Dish>> {
        return this.http.get<Array<Dish>>('http://localhost:8080/dishes/4');
        }
 getNapoje(): Observable<Array<Dish>> {
          return this.http.get<Array<Dish>>('http://localhost:8080/dishes/3');
          }

addDish(dish: Dish): Observable<Dish> {
  return this.http.post<Dish>('http://localhost:8080/dishes', dish);
}
deleteDish(dishId: number): Observable<Dish> {
  return this.http.delete<Dish>('http://localhost:8080/dishes/' + dishId);
}
addUser(user: User): Observable<User> {
  return this.http.post<User>('http://localhost:8080/users', user);
}
getUsers(): Observable<Array<User>> {
  return this.http.get<Array<User>>(this.url);
}
deleteUser(user: User): Observable<User> {
  this.id = user.userId;
  return this.http.delete<User>('http://localhost:8080/users/' + this.id);
}
getUserByEmail(email: string) {
  return this.http.get<Array<User>>('http://localhost:8080/users?email=' + email);
}

getUserByLogin(login: string): Observable<Array<User>> {
  return this.http.get<Array<User>>('http://localhost:8080/users?login=' + login);
}
  addToOrderDishes(dish: Dish) {
      this.dishesOrder.push(dish);
  }
  getOrderDishes() {
    return this.dishesOrder;
  }
  clearOrderDishes() {
    this.dishesOrder = [];
  }

  addOrder(order: OrderTable): Observable<number> {
     return  this.http.post<number>('http://localhost:8080/orders', order);
  }
  addOrderDetail(orderDetail: OrderDetail) {
    return this.http.post('http://localhost:8080/order-details', orderDetail);
  }
  deleteFromOrder(dish: Dish) {
    const index: number = this.dishesOrder.indexOf(dish);
    this.dishesOrder.splice(index, 1);
  }
  addReservation(reservation: Reservation): Observable<number> {
    return this.http.post<number>('http://localhost:8080/reservations', reservation);
  }
  getDishesByString(s: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes?string=' + s);
  }
  getOrders(): Observable<Array<OrderTable>> {
    return this.http.get<Array<OrderTable>>('http://localhost:8080/orders');
  }
  updateOrder(order: OrderTable): Observable<Array<OrderTable>> {
    return this.http.post<Array<OrderTable>>('http://localhost:8080/orders', order);
  }
  getOrderDetailsByOrderId(orderId: number): Observable<Array<OrderDetail>> {
    return this.http.get<Array<OrderDetail>>('http://localhost:8080/order-details/' + orderId);
  }
  getOrderDetails(): Observable<Array<OrderDetail>> {
    return this.http.get<Array<OrderDetail>>('http://localhost:8080/order-details');
  }
  getBoards(): Observable<Array<Board>> {
    return this.http.get<Array<Board>>('http://localhost:8080/boards');
  }
  getReservations(): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>('http://localhost:8080/reservations');
  }
  getOrdersByuserId(userId: number): Observable<Array<OrderTable>> {
    return this.http.get<Array<OrderTable>>('http://localhost:8080/orders/' + userId);
  }

}
