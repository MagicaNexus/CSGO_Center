import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mappool } from '../Mappool';


@Injectable()
export class CompetitiveMapPoolProvider {

  listCompetitiveMapPool : Mappool[] = 
  [
    {nom:"Dust II",creator:"Valve",terrorists:"Elite Crew",counterTerrorists:"SEAL Team 6",location:"Morocco",theme:"Desert",picture:'assets/imgs/d2.jpg',map:"assets/imgs/callouts/callouts_d2.jpg",scenario:"Bomb defusal"},
    {nom:"Inferno",creator:"Valve",terrorists:"Separatist",counterTerrorists:"SAS",location:"Italy",theme:"Urban",picture:'assets/imgs/Inferno.jpg',map:"assets/imgs/callouts/callouts_inferno.jpg",scenario:"Bomb defusal"},
    {nom:"Train",creator:"Valve",terrorists:"Balkan",counterTerrorists:"SEAL Team 6",location:"Russia",theme:"Industrial",picture:"assets/imgs/train.png",map:"assets/imgs/callouts/callouts_train.jpg",scenario:"Bomb defusal"},
    {nom:"Mirage",creator:"Valve",terrorists:"Elite Crew",counterTerrorists:"SAS",location:"Morocco",theme:"Suburban",picture:"assets/imgs/mirage.jpg",map:"assets/imgs/callouts/callouts_mirage.jpg",scenario:"Bomb defusal"},
    {nom:"Nuke",creator:"Valve",terrorists:"Balkan",counterTerrorists:"SAS",location:"Nuclear plant USA",theme:"Industrial",picture:"assets/imgs/nuke.jpg",map:"assets/imgs/callouts/callouts_nuke.jpg",scenario:"Bomb defusal"},
    {nom:"Overpass",creator:"Valve",terrorists:"Phoenix faction",counterTerrorists:"GSG9",location:"Germany",theme:"Urban",picture:"assets/imgs/overpass.jpg",map:"assets/imgs/callouts/callouts_overpass.jpg",scenario:"Bomb defusal"},
    {nom:"Cobblestone",creator:"Valve",terrorists:"Phoenix faction",counterTerrorists:"GIGN",location:"France",theme:"Castle",picture:"assets/imgs/cobblestone.png",map:"assets/imgs/callouts/callouts_cobblestone.jpg",scenario:"Bomb defusal"},
    {nom:"Cache",creator:"FMPONE, Volcano, and penE",terrorists:"Separatist",counterTerrorists:"SEAL Team 6",location:"Chernobyl",theme:"Industrial",picture:"assets/imgs/cache.jpeg",map:"assets/imgs/callouts/callouts_cache.jpg",scenario:"Bomb defusal"}
  ]

  constructor() {
    console.log('Hello CompetitiveMapPoolProvider Provider');
  }

  getListMappool():Mappool[] {
    return this.listCompetitiveMapPool;
  }

}
