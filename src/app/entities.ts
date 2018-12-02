export interface Board {
  boardId?: number;
  boardType: string;
}
export class Dish {
  dishId?: number;
  dishName: string;
  dishPrice: number;
  ingredients: string;
  description: string;
  dishType: DishType;
}
export interface DishType {
  dishTypeId?: number;
  dishTypeName: string;
}
export interface OrderDetail {
  orderDetailId?: number;
  orderTable: OrderTable;
  dish: Dish;
  dishAmount: number;
}
export interface OrderTable {
  orderId?: number;
  value: number;
  user: User;
  status: Status;
  dateTime: Date;
}
export interface Reservation {
  reservationId?: number;
  dateTime: Date;
  user: User;
  board: Board;
}
export interface Status {
  statusId?: number;
  statusName: string;
}

export interface UserType {
  userTypeId?: number;
  userTypeName: string;
}
export interface User {
  userId?: number;
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: UserType;
}

