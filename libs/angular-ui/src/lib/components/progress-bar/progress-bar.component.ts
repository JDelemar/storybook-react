import { Component } from '@angular/core';

import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'component-monorepo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  progressBar$ = this.progressBarService.progressBar$;

  constructor(private progressBarService: ProgressBarService) {
  }
}
