import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SensitivityMousePadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensitivity-mouse-pad',
  templateUrl: 'sensitivity-mouse-pad.html',
})
export class SensitivityMousePadPage {

  public average:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.average = this.navParams.get("theAverage");
    console.log("Transmission sensi finale : " + this.average);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensitivityMousePadPage');
    {
      console.log('ionViewDidLoad MapPage');
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Loading...'
      });
  
      loading.present();
  
      setTimeout(() => {
        loading.dismiss();
      }, 200);
    
    }
  }

  onClickHome()
  {
    this.navCtrl.push(HomePage);
  }

}
