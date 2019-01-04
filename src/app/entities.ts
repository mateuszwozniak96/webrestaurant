export class Board {
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
  dishImage?: string;
}
export class DishType {
  dishTypeId?: number;
  dishTypeName: string;
}
export class OrderDetail {
  orderDetailId?: number;
  orderTable: OrderTable;
  dish: Dish;
  dishAmount: number;
}
export class OrderTable {
  orderId?: number;
  value: number;
  user: User;
  status: Status;
  dateTime: Date;
}
export class Reservation {
  reservationId?: number;
  dateTime: Date;
  user: User;
  board: Board;
}
export class Status {
  statusId?: number;
  statusName: string;
}

export class UserType {
  userTypeId?: number;
  userTypeName: string;
}
export class User {
  userId?: number;
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: UserType;
  isActive: number;
}

