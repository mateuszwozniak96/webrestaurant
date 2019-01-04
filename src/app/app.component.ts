import { ReservSummaryReservService } from './services/reserv-summary-reserv.service';
import { MenuOrderService } from './services/menu-order.service';
import { HttpService } from './services/http.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webrestaurant';
  user: User;
  constructor(private httpService: HttpService, private menuOrderServie: MenuOrderService,
    private reservService: ReservSummaryReservService, private userService: UserService) {}

    ngOnInit() {
      this.user = this.userService.getUser();

    }

    setActive(value: number) {
      this.user.isActive = value;
      this.user.userType.userTypeId = 4;
      this.userService.setUser(this.user);
      console.log(value);
    }
    setUser() {
      this.user = this.userService.getUser();
    }
}
