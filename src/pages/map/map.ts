import { Component, wtfStartTimeRange } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Mappool } from '../../providers/Mappool';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map:Mappool;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.map = this.navParams.get("theMap");
    console.log(`Map : ${JSON.stringify(this.map)}`);
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
    }, 1000);
  
  }

}
