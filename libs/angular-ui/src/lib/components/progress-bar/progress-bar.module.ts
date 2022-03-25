import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaMaterialModule } from '@component-monorepo/angular-material';

import { ProgressBarComponent } from './progress-bar.component';

const components = [
  ProgressBarComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FaMaterialModule,
  ],
  exports: [
    ...components,
  ],
})
export class ProgressBarModule { }
