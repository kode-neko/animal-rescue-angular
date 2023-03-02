import { I18knService } from './core/services/i18kn.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private i18kn: I18knService, private cdr: ChangeDetectorRef) {
    this.langManager();
  }

  langManager(): void {
    this.i18kn.initService()
    this.i18kn.getUpdateLang().subscribe({
      next: () => {
        this.cdr.markForCheck();
      }
    })
  }
}
