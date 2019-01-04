import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { User } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];
  constructor(private httpService: HttpService) {
    this.httpService.getUsers().subscribe(users => {
      this.users = users;
    });
   }
}
