import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// type Nullable<T> = T | null;

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressBar$ = new BehaviorSubject<IProgressBar|null>(null);
  
  // TODO: multiple progress bars?
  constructor() { }

  async setProgressBar(percent?: number): Promise<void> {
    // TODO: use rxjs interval?
    // TODO: make separate component
    const isNumber = percent !== null && percent !== undefined;

    if (isNumber && percent >= 0 && percent < 100) {
      this.progressBar$.next({
        Mode: Mode.Determinate,
        Value: percent,
      });
      await new Promise(resolve => setTimeout(resolve, 0));
      // console.log('setProgressBar determinate');
    } else  if (isNumber && percent >= 100) {
      this.progressBar$.next(null);
      await new Promise(resolve => setTimeout(resolve, 0));
      // console.log('setProgressBar none');
    } else {
      this.progressBar$.next({
        Mode: Mode.Indeterminate,
        // value: 1,
      });
      // console.log('setProgressBar indeterminate');
    }
  }

  hideProgressBar() {
    this.setProgressBar(100);
  }
}

enum Mode {
  Determinate = 'determinate',
  Indeterminate = 'indeterminate',
}

export interface IProgressBar {
  Mode: Mode,
  Value?: number,
}
