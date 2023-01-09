import { Pipe, PipeTransform } from '@angular/core';
import i18next from 'i18next';

@Pipe({
  name: 'i18kn'
})
export class I18knPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return i18next.t(value);
  }

}
