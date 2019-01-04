import { HttpService } from './../services/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../entities';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private httpService: HttpService, private userService: UserService) {
    this.getUsers();
   }

  ngOnInit() {

  }

  getUsers() {
    this.httpService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  deleteUser(user: User) {
    this.httpService.deleteUser(user).subscribe();
    window.location.reload();
  }

}
