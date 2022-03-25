import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FaMaterialModule } from '@component-monorepo/angular-material';

import {
  ProgressBarModule,

  SearchComponent,
} from './components';

const exportComponents = [
  SearchComponent,
];

const exportModules = [
  ProgressBarModule,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FaMaterialModule,
    ...exportModules,
  ],
  declarations: [
    ...exportComponents,
  ],
  exports: [
    ...exportModules,
    ...exportComponents,
  ],
})
export class AngularUiModule {}
