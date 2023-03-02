import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import i18next, { i18n } from 'i18next';
import en from 'src/locale/en';
import es from 'src/locale/es';

@Injectable({
  providedIn: 'root'
})
export class I18knService {

  private updateLang = new BehaviorSubject<string>('');

  initService(): void {
    i18next.init({
      lng: 'en',
      debug: true,
      resources: {en: {translation: en}, es: {translation: es}}
    })
  }

  t(name: string): string {
    return i18next.t(name);
  }

  changeLang(lang: string): void {
    i18next.changeLanguage(lang);
    this.updateLang.next(lang);
  }

  getUpdateLang(): BehaviorSubject<string> {
    return this.updateLang;
  }

}
