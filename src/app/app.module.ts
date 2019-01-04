import { MenuOrderService } from './services/menu-order.service';
import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FormDishComponent } from './form-dish/form-dish.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrdersComponent } from './orders/orders.component';
import { ReservationSumamryComponent } from './reservation-sumamry/reservation-sumamry.component';
import { ReservSummaryReservService } from './services/reserv-summary-reserv.service';
import { DatePipe } from '@angular/common';
import { UserService } from './services/user.service';
import { RegisterSummaryComponent } from './register-summary/register-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ReservationComponent,
    AboutComponent,
    RegisterComponent,
    AdminComponent,
    FormDishComponent,
    UsersComponent,
    UserFormComponent,
    OrderComponent,
    OrderSummaryComponent,
    OrdersComponent,
    ReservationSumamryComponent,
    RegisterSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()

  ],
  providers: [HttpService, MenuOrderService, ReservSummaryReservService, DatePipe, UserService, AppComponent,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
