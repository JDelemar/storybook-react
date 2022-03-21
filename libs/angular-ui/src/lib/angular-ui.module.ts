import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FaMaterialModule } from '@component-monorepo/angular-material';

import { SearchComponent } from './components';

const exportComponents = [
  SearchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FaMaterialModule,
  ],
  declarations: [
    ...exportComponents,
  ],
  exports: [
    ...exportComponents,
  ],
})
export class AngularUiModule {}
