import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeaponListPage } from './weapon-list';

@NgModule({
  declarations: [
    WeaponListPage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponListPage),
  ],
})
export class WeaponListPageModule {}
