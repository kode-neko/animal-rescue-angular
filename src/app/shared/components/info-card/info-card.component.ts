import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/core/model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input()
  animal: Animal|undefined = undefined;
}
