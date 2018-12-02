import { FormsModule } from '@angular/forms';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../entities';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.user = {
      'login': '',
      'password': '',
      'email': '',
      'firstName': '',
      'lastName': '',
      'userType': {
          'userTypeId': 2,
          'userTypeName': ''
   }};
  }
register() {
  this.httpService.addUser(this.user).subscribe();
}
}
