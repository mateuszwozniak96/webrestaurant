import { UserService } from './../services/user.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../entities';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  userId: number;

  userTypes = ['', 'Pracownik', 'Uzytkownik zalogowany'];

  constructor(private httpService: HttpService, private route: ActivatedRoute, private userService: UserService) {
    this.route.queryParams.subscribe(params => {
      this.userId = +params['userId'];
     });
  }

  ngOnInit() {
    this.httpService.getUser(this.userId).subscribe(user => {
      this.user = user;
    });
  }
  updateUser() {
    this.httpService.addUser(this.user).subscribe();
    window.location.reload();
  }

}
