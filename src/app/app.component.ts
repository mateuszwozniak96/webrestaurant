import { WheatherService } from './services/wheather.service';
import { ReservSummaryReservService } from './services/reserv-summary-reserv.service';
import { MenuOrderService } from './services/menu-order.service';
import { HttpService } from './services/http.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import { User, Dictionary } from './entities';
import { when } from 'q';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webrestaurant';
  user: User;
  wheather: any;
  wheatherCity;
  wheatherTemp;
  wheatherType;
  otherTheme = false;
  otherLang = false;
  bgColor = 'darkkhaki';
  themeClass = 'container-black-theme';
  constructor(private httpService: HttpService, private menuOrderServie: MenuOrderService,
    private reservService: ReservSummaryReservService, public userService: UserService,
              public wheatherService: WheatherService , public dictionaryService: DictionaryService) {}

    ngOnInit() {
      this.user = this.userService.getUser();
      this.wheatherService.getWheather().subscribe(wheather => {
        console.log(wheather);
        this.wheatherCity = wheather.name;
        this.wheatherTemp = (Number(wheather.main.temp) - 272).toFixed(1) + '\xB0';
        this.wheatherType = wheather.weather[0].description;
      });
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
    changeTheme() {
      if (this.otherTheme) {
       this.themeClass = 'container-black-theme';
      } else {
         this.themeClass = 'container-light-theme';
      }
      this.otherTheme = !this.otherTheme;
  }
}
