import { I18knService } from './core/services/i18kn.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private i18kn: I18knService) {
    i18kn.initService()
  }
}
