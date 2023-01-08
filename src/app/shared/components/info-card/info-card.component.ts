import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/core/model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input()
  animal: Animal|undefined = undefined;

  @Output()
  clickEdit = new EventEmitter<string>();

  hanldeEdit(): void {
    this.clickEdit.emit(this.animal?.id)
  }
}
