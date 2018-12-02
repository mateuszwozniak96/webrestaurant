import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish, User } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  id: number;

  getDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes');
  }


  getDishesId(id): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>('http://localhost:8080/dishes/{{id}}');
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
deleteDish(dish: Dish): Observable<Dish> {
  this.id = dish.dishId;
  return this.http.delete<Dish>('http://localhost:8080/dishes/' + this.id);
}
addUser(user: User): Observable<User> {
  return this.http.post<User>('http://localhost:8080/users', user);
}
}


