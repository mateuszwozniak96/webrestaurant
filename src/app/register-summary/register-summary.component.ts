import { Dictionary } from './../entities';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-register-summary',
  templateUrl: './register-summary.component.html',
  styleUrls: ['./register-summary.component.css']
})
export class RegisterSummaryComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
