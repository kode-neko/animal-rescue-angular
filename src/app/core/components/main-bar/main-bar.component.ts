import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subject, BehaviorSubject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';
import socialList from 'src/constants/social.constants';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnDestroy{

  isOpenedDrawer = false;
  destroyed = new Subject<void>();
  isSM = false;
  isLoading$: BehaviorSubject<boolean>;
  socialList = socialList;

  constructor(breakPointObserver: BreakpointObserver, loadingService: LoadingService, private router: Router) {
    this.isLoading$ = loadingService.getLoading();
    breakPointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => this.isSM = !result.matches)
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  handleOpenDrawer() {
    this.isOpenedDrawer = !this.isOpenedDrawer
  }

  handleCreateBtn() {
    this.router.navigate(['/create'])
    this.isOpenedDrawer = false;
  }

  handleClickSocial(id: string) {
    const path =  socialList.find(s => s.id === id)?.path
    window.open(path, '_blank');
  }
}
