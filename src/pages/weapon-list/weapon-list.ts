import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Weapons } from '../../providers/Weapons';
import { WeaponsProvider } from '../../providers/weapons/weapons';

/**
 * Generated class for the WeaponListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapon-list',
  templateUrl: 'weapon-list.html',
})
export class WeaponListPage {

  listWeapons: Weapons[];

  weaponCategory:string;
  side:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public weapon:WeaponsProvider) {
    this.side = this.navParams.get("theSide");
    this.weaponCategory = this.navParams.get("theCategory");
    console.log(`Category Side : ${JSON.stringify(this.weaponCategory)}`);
    this.listWeapons = this.weapon.getListWeapons();

    /*let allWeapons : Weapons[] = this.weapon.getListWeapons();

    for(let i=0 ; i<allWeapons.length; i++)
    {
      
    for(let j=0 ; j<18; j++)
    {
      if (this.filtrage(this.side, this.weaponCategory) == j)
      {
        this.listWeapons.push(allWeapons[i])
      }
    }
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponListPage');
  }

  onClickWeapon(weapon:Weapons){
    console.log("Ouverture de la page MapUnique");
    this.navCtrl.push("UniqueweaponPage",
    {
      theWeapon: weapon
    });
    console.log("Transmission de donnée : " + weapon);
  }

  /*filtrage(side, category) : number
  {
    console.log('ionViewDidLoad WeaponListPage');
    if(side == "counter")
    {
      if(category == "pistol")
      {
        return 1;
      }
      if(category == "smg")
      {
        return 2;
      }
      if(category == "heavy")
      {
        return 3;
      }
      if(category == "rifle")
      {
        return 4;
      }
      if(category == "grenade")
      {
        return 5;
      }
      if(category == "accessory")
      {
        return 6;
      }
    }

    if(side == "terrorist")
    {
      if(category == "pistol")
      {
        return 7;
      }
      if(category == "smg")
      {
        return 8;
      }
      if(category == "heavy")
      {
        return 9;
      }
      if(category == "rifle")
      {
        return 10;
      }
      if(category == "grenade")
      {
        return 11;
      }
      if(category == "accessory")
      {
        return 12;
      }
    }

    if(side == "both")
    {
      if(category == "pistol")
      {
        return 13;
      }
      if(category == "smg")
      {
        return 14;
      }
      if(category == "heavy")
      {
        return 15;
      }
      if(category == "rifle")
      {
        return 16;
      }
      if(category == "grenade")
      {
        return 17;
      }
      if(category == "accessory")
      {
        return 18;
      }
    }
    
  }*/

}
