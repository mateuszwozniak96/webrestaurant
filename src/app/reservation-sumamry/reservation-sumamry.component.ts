import { Dictionary } from './../entities';
import { Component, OnInit } from '@angular/core';
import { ReservSummaryReservService } from '../services/reserv-summary-reserv.service';
import { Reservation } from '../entities';
import { UserService } from '../services/user.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-reservation-sumamry',
  templateUrl: './reservation-sumamry.component.html',
  styleUrls: ['./reservation-sumamry.component.css']
})
export class ReservationSumamryComponent implements OnInit {
  reservation: Reservation;
  constructor(private reservService: ReservSummaryReservService, private userService: UserService,
    public dictionaryService: DictionaryService ) { }

  ngOnInit() {
    this.reservation = this.reservService.getReservation();
  }

}
