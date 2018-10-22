import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeaponCategoryChoicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapon-category-choices',
  templateUrl: 'weapon-category-choices.html',
})
export class WeaponCategoryChoicesPage {

  side:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.side = this.navParams.get("theSide");
    console.log(`Category Side : ${JSON.stringify(this.side)}`);
    

  }

  onClickGrenades(){
    let weaponCategory:string = "grenade";
    console.log("Ouverture de la page Grenades");
    this.navCtrl.push("WeaponListPage",
    {
      theCategory: weaponCategory,
      theSide: this.side
    });
    console.log("Transmission de donnée : " + this.side + " avec comme catégorie d'arme " + weaponCategory);
  }

  onClickPistols(){
    let weaponCategory:string = "pistol";
    console.log("Ouverture de la page Pistols");
    this.navCtrl.push("WeaponListPage",
    {
      theCategory: weaponCategory,
      theSide: this.side
    });
    console.log("Transmission de donnée : " + this.side + " avec comme catégorie d'arme " + weaponCategory);

  }

  onClickSMG(){
    let weaponCategory:string = "smg";
    console.log("Ouverture de la page SMGs");
    this.navCtrl.push("WeaponListPage",
    {
      theCategory: weaponCategory,
      theSide: this.side
    });
    console.log("Transmission de donnée : " + this.side + " avec comme catégorie d'arme " + weaponCategory);
  }

  onClickHeavies(){
    let weaponCategory:string = "heavy";
    console.log("Ouverture de la page Heavies");
    this.navCtrl.push("WeaponListPage",
    {
      theCategory: weaponCategory,
      theSide: this.side
    });
    console.log("Transmission de donnée : " + this.side + " avec comme catégorie d'arme " + weaponCategory);
  }

  onClickRifles(){
    let weaponCategory:string = "rifle";
    console.log("Ouverture de la page Rifles");
    this.navCtrl.push("WeaponListPage",
    {
      theCategory: weaponCategory,
      theSide: this.side
    });
    console.log("Transmission de donnée : " + this.side + " avec comme catégorie d'arme " + weaponCategory);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponCategoryChoicesPage');
  }

}
