import { HttpService } from './http.service';
import { Dictionary } from './../entities';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  otherLang = false;
  dictionary: Dictionary;
  constructor(public httpService: HttpService) {
    this.httpService.getDictionaryPol().subscribe(dictionary => {
      this.dictionary = dictionary;
    });
  }

  changeLang() {
    if (this.otherLang) {
      this.httpService.getDictionaryPol().subscribe(dictionary => {
        this.dictionary = dictionary;
      });
    } else {
      this.httpService.getDictionaryEng().subscribe(dictionary => {
        this.dictionary = dictionary;
      });
    }
    this.otherLang = !this.otherLang;
}
}
