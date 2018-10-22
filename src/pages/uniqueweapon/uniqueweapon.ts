import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Weapons } from '../../providers/Weapons';
import { HomePage } from '../home/home';

/**
 * Generated class for the UniqueweaponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uniqueweapon',
  templateUrl: 'uniqueweapon.html',
})
export class UniqueweaponPage {

  weapon:Weapons;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.weapon = this.navParams.get("theWeapon");
    console.log(`Weapon : ${JSON.stringify(this.weapon)}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 500);
  
  }

  presentAlert(name : any, pattern: any) {
    let alert = this.alertCtrl.create({
      title: "Pattern of the " + name,
      subTitle: pattern,
      buttons: ['OK']
    });
    alert.present();
  }

  onClickHome()
  {
    this.navCtrl.push(HomePage);
  }

}
