import { Component, Input } from '@angular/core';
import { Page } from 'src/app/core/model';

@Component({
  selector: 'app-header-sub-page',
  templateUrl: './header-sub-page.component.html',
  styleUrls: ['./header-sub-page.component.scss']
})
export class HeaderSubPageComponent {

  @Input()
  pages: Page[] = [];

  @Input()
  title = '';

}
