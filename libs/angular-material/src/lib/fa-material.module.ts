import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import entire icon styles - does not support tree shaking
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import icon
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    FontAwesomeModule,
    AngularMaterialModule,
  ],
})
export class FaMaterialModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
