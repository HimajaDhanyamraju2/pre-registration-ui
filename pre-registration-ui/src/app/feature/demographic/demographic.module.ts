import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatKeyboardModule, MAT_KEYBOARD_LAYOUTS } from '@ngx-material-keyboard/core';

import { DemographicRoutingModule } from './demographic-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemographicComponent } from './demographic/demographic.component';
import { portalKeyboardLayouts } from './keyboard-layouts';

/**
 * @description This is the feature module for the demographic module.
 * @author Shashank Agrawal
 *
 * @export
 * @class DemographicModule
 */
@NgModule({
  declarations: [DemographicComponent],
  imports: [CommonModule, DemographicRoutingModule, ReactiveFormsModule, SharedModule, MatKeyboardModule],
  // Portuguese virtual keyboard with the accented letters as keys
  providers: [{ provide: MAT_KEYBOARD_LAYOUTS, useValue: portalKeyboardLayouts }]
})
export class DemographicModule {}
