import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensitivityMousePadPage } from './sensitivity-mouse-pad';

@NgModule({
  declarations: [
    SensitivityMousePadPage,
  ],
  imports: [
    IonicPageModule.forChild(SensitivityMousePadPage),
  ],
})
export class SensitivityMousePadPageModule {}
