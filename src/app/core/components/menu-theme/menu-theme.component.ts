import { Component, Output, EventEmitter } from '@angular/core';
import { Theme } from '../../model';

@Component({
  selector: 'app-menu-theme',
  templateUrl: './menu-theme.component.html',
  styleUrls: ['./menu-theme.component.css']
})
export class MenuThemeComponent {

  @Output() changeTheme = new EventEmitter<Theme>();

  clickOption(lang: string) {
    this.changeTheme.emit(lang as Theme);
  }
}
