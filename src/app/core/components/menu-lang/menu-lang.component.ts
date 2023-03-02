import { I18knService } from './../../services/i18kn.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lang',
  templateUrl: './menu-lang.component.html',
  styleUrls: ['./menu-lang.component.css']
})
export class MenuLangComponent {

  constructor(private i18knService: I18knService) {

  }

  changeLang(lang: string) {
    this.i18knService.changeLang(lang);
  }
}
