import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-sub-page',
  templateUrl: './header-sub-page.component.html',
  styleUrls: ['./header-sub-page.component.scss']
})
export class HeaderSubPageComponent {

  @Input()
  pages: string[] = [];

  @Input()
  title = '';

}
