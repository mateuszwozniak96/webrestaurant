import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Reservation } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ReservSummaryReservService {
  reservation: Reservation;
  constructor() { }

  getReservation() {
    return this.reservation;
  }
  setReservation(reservation: Reservation) {
    this.reservation = reservation;
  }
}
