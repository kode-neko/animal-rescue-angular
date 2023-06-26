import { Lang } from '../../model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-lang',
  templateUrl: './menu-lang.component.html',
  styleUrls: ['./menu-lang.component.css']
})
export class MenuLangComponent {

  @Output() changeLang = new EventEmitter<Lang>();

  clickOption(lang: string) {
    this.changeLang.emit(lang as Lang);
  }
}
