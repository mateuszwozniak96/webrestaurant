import { RegisterSummaryComponent } from './register-summary/register-summary.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order/order.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormDishComponent } from './form-dish/form-dish.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ReservationSumamryComponent } from './reservation-sumamry/reservation-sumamry.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'reserv', component: ReservationComponent},
  {path: 'reserv-summary', component: ReservationSumamryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'register-summary', component: RegisterSummaryComponent},
  {    path: 'form',
      component: FormDishComponent
      },
      {
        path: 'users',
        component: UsersComponent,
       },
       {
        path: 'formuser',
        component: UserFormComponent
      },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
