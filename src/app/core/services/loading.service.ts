import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject: BehaviorSubject<boolean>;

  constructor() { 
    this.loadingSubject = new BehaviorSubject(false);
  }

  setLoading(flag: boolean) {
    this.loadingSubject.next(flag);
  }

  getLoading(): BehaviorSubject<boolean> {
    return this.loadingSubject;
  }
  
}
