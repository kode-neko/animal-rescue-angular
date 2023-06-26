import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Lang } from '../../model';

@Component({
  selector: 'app-switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrls: ['./switch-lang.component.css']
})
export class SwitchLangComponent {

  @Input() lang: Lang = Lang.EN; 
  @Output() changeLang = new EventEmitter<Lang>();

  changeToggle(e: MatButtonToggleChange) {
    this.changeLang.emit(e.value)
  }
}
