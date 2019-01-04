import { Injectable } from '@angular/core';
import { User } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() {
    this.initUser();
   }

  setUser(user: User) {
    this.user = user;
    this.user.isActive = 1;
  }
  getUser() {
    return this.user;
  }

  initUser() {
    this.user = {
      'login': '',
      'password': '',
      'email': '',
      'firstName': '',
      'lastName': '',
      'isActive': 0,
      'userType': {
          'userTypeId': 4,
          'userTypeName': ''
      }
  };
}
}
