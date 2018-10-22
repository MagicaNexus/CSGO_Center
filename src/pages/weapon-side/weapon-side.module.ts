import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeaponSidePage } from './weapon-side';

@NgModule({
  declarations: [
    WeaponSidePage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponSidePage),
  ],
})
export class WeaponSidePageModule {}
