import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Theme } from '../../model';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.css']
})
export class SwitchThemeComponent {

  @Input() theme: Theme = Theme.DARK; 
  @Output() changeTheme = new EventEmitter<Theme>();

  changeToggle(e:MatButtonToggleChange) {
    this.changeTheme.emit(e.value)
  }
}
