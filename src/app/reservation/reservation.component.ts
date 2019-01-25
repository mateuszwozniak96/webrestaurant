import { UserService } from './../services/user.service';
import { HttpService } from './../services/http.service';
import { Reservation, Board, User, Dictionary } from './../entities';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ReservSummaryReservService } from '../services/reserv-summary-reserv.service';
import { ReservationSumamryComponent } from '../reservation-sumamry/reservation-sumamry.component';
import { DatePipe } from '@angular/common';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, OnChanges {
  reservation: Reservation;
  myDate = new Date();
  myTime = new Date();
  minTime = new Date();
  maxTime = new Date();
  showMinutes = false;
  boards: Board[] = [];
  reservations: Reservation[] = [];
  isReserved = true;
  dateToCompare: string;
  dateToCompare2: string;
  user: User;

  constructor(private httpService: HttpService, private reservService: ReservSummaryReservService,
            public datePipe: DatePipe, private userService: UserService, public dictionaryService: DictionaryService) {

    this.minTime.setHours(11);
    this.maxTime.setHours(24);
    this.minTime.setMinutes(0);
    this.maxTime.setMinutes(0);
    this.initReservation();
    this.getTables();

}

  ngOnInit() {
    this.httpService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
    this.user = this.userService.getUser();
  }
 ngOnChanges() {
 }

  reserv() {

    this.reservService.setReservation(this.reservation);
    this.httpService.addReservation(this.reservation).subscribe(reservationId => {
     this.reservService.reservation.reservationId = reservationId;
    });
  }
  setBoard(board: Board) {
    this.reservation.board = board;
    this.reservation.dateTime.setTime(this.myTime.getTime());
    this.reservation.dateTime.setFullYear(this.myDate.getFullYear());
    this.reservation.dateTime.setDate(this.myDate.getDate());
    this.reservation.dateTime.setMonth(this.myDate.getMonth());
    this.reservation.dateTime.setMinutes(0);
    this.reservation.dateTime.setSeconds(0);
    this.isReserved = false;

    this.dateToCompare = this.datePipe.transform(this.reservation.dateTime, 'dd/MM/yyyy HH:mm');
    console.log(this.dateToCompare);
    this.reservations.forEach(reserv => {
      this.dateToCompare2 = this.datePipe.transform(reserv.dateTime, 'dd/MM/yyyy HH:mm');
      if (this.dateToCompare === this.dateToCompare2 && this.reservation.board.boardId === reserv.board.boardId) {
        this.isReserved = true;
      }
    });
  }
  getTables() {
    this.httpService.getBoards().subscribe(boards => {
      this.boards = boards;
    });
  }
  initReservation() {
    this.reservation = {
      'dateTime': new Date(),
      'user': this.userService.getUser(),
      'board': {
          'boardId': 1,
          'boardType': 'maly'
      }
  };
  }

}
