import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeaponSidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapon-side',
  templateUrl: 'weapon-side.html',
})
export class WeaponSidePage {

  Tside: string = "terrorist";
  CTside: string = "counter";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponSidePage');
  }
  onClickCT()
  {
    console.log("Ouverture de la page WeaponsChoices CTside");
    this.navCtrl.push("WeaponCategoryChoicesPage",
    {
      theSide: this.CTside
    });
    console.log("Transmission de donnée : " + this.CTside);
  }


  onClickT()
  {
    console.log("Ouverture de la page WeaponsChoices Tside");
    this.navCtrl.push("WeaponCategoryChoicesPage",
    {
      theSide: this.Tside
    });
    console.log("Transmission de donnée : " + this.Tside);
  }

}
