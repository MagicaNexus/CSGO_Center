import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SensitivityCsgoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensitivity-csgo',
  templateUrl: 'sensitivity-csgo.html',
})
export class SensitivityCsgoPage {

  public sensMousepad: number;
  public low: number; avg: number; high: number; stage: number; compteur: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stage = 0;
    this.compteur = 1;
    this.low = 1;
    this.high = 3;
    this.arrondi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensitivityCsgoPage');


  }

  onClickButton(i: number) {
    this.compteur++;
    this.stage++;
    if (i == 1) {
      this.high = (this.low*1 + this.high*1)/2;

      this.avg=this.high;
    }

    if (i == 2) {
      this.low = (this.low*1 + this.high*1)/2;
 
      this.avg=this.low;
    }
    this.arrondi();

  }
  arrondi() {
    this.low = Math.round(this.low * 100) / 100;
    this.high = Math.round(this.high * 100) / 100;
    this.avg = Math.round(this.high * 100) / 100;
    console.log("STAGE : " + this.stage);
    console.log("----Low = " + this.low);
    console.log("----avg = " + this.avg);
    console.log("----High = " + this.high);

  }

  onClickFind()
  {
    this.navCtrl.push("SensitivityMousePadPage",
    {
      theAverage: this.avg,
    });
    console.log("Transmission result : " + this.avg);
  }

  onClickRestart()
  {
    this.low=1;
    this.high = 3;
    this.compteur=1;
    this.stage=0;
  }

  onClickHome()
  {
    this.navCtrl.push(HomePage);
  }

}
