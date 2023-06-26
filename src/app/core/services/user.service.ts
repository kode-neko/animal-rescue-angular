import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang, Theme } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _lang = new BehaviorSubject<Lang>(Lang.EN);
  private _theme = new BehaviorSubject<Theme>(Theme.DARK);

  constructor() {
    this.lang.subscribe(() => {
      console.log('Upload lang')
    });
    this.theme.subscribe(() => {
      console.log('Upload theme')
    });
  }
 
  get lang() {
    return this._lang;
  }

  get theme() {
    return this._theme;
  }
}
