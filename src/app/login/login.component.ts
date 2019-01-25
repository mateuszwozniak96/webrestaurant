import { Dictionary } from './../entities';
import { AppComponent } from './../app.component';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entities';
import { Router } from '@angular/router';
import { sha256, sha224 } from 'js-sha256';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  userName: string;
  password: string;
  incorrect = false;
  constructor(private httpService: HttpService, private userService: UserService, private router: Router,
                  private appComponent: AppComponent, public dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(users => {
      this.userService.user.userType.userTypeId = 4;
      this.userService.user.isActive = 0;
      this.users = users;
      this.userService.initUser();
    });
  }
  login() {
      this.users.forEach(user => {
        if ((user.login === this.userName) && (user.password === sha256(this.password))) {
          this.userService.setUser(user);
          this.appComponent.setUser();
          this.router.navigate(['../menu']);
          return;
        }
      });
      this.incorrect = true;
  }

}
