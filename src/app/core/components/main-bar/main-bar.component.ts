import { Component, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnDestroy{

  destroyed = new Subject<void>();
  isSM = false;

  constructor(breakPointObserver: BreakpointObserver) {
    breakPointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        console.log(this.isSM)
        this.isSM = !result.matches
      })
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
