import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompetitiveMapPoolProvider } from '../../providers/competitive-map-pool/competitive-map-pool';
import { Mappool } from '../../providers/Mappool';

/**
 * Generated class for the MappoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mappool',
  templateUrl: 'mappool.html',
})
export class MappoolPage {

  listCompetitiveMapPool: Mappool[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mappool: CompetitiveMapPoolProvider ) {
    this.listCompetitiveMapPool = this.mappool.getListMappool();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MappoolPage');
  }

  onClickMap(map:Mappool){
    console.log("Ouverture de la page MapUnique");
    this.navCtrl.push("MapPage",
    {
      theMap: map
    });
    console.log("Transmission de donnée : " + map);
  }

}
