import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(public http: HttpClient) {
   }

   getWheather(): Observable<any> {
     return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=b10024ac519f79df7133a99af4ff48ab');
   }
}
