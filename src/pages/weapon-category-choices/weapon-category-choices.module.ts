import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeaponCategoryChoicesPage } from './weapon-category-choices';

@NgModule({
  declarations: [
    WeaponCategoryChoicesPage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponCategoryChoicesPage),
  ],
})
export class WeaponCategoryChoicesPageModule {}
