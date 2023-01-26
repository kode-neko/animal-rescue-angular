import { Injectable } from '@angular/core';
import i18next from 'i18next';
import en from 'src/locale/en';
import es from 'src/locale/es';

@Injectable({
  providedIn: 'root'
})
export class I18knService {

   initService(): void {
    i18next.init({
      lng: 'es',
      debug: true,
      resources: {en: {translation: en}, es: {translation: es}}
    })
   }

   t(name: string): string {
    return i18next.t(name);
  }
}
