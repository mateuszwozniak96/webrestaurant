import { Dictionary } from './../entities';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
