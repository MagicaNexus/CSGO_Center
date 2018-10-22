import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mappool } from '../Mappool';


@Injectable()
export class CompetitiveMapPoolProvider {

  listCompetitiveMapPool : Mappool[] = 
  [
    {nom:"Dust II",creator:"Valve",terrorists:"Elite Crew",counterTerrorists:"SEAL Team 6",location:"Morocco",theme:"Desert",picture:'../../assets/imgs/d2.jpg',map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_d2.jpg?alt=media&token=6541fca6-e3e9-47ca-a361-b1b10f490a8c",scenario:"Bomb defusal"},
    {nom:"Inferno",creator:"Valve",terrorists:"Separatist",counterTerrorists:"SAS",location:"Italy",theme:"Urban",picture:'../../assets/imgs/Inferno.jpg',map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_inferno.jpg?alt=media&token=25c92041-1a2d-426e-87d8-5f08855ea853",scenario:"Bomb defusal"},
    {nom:"Train",creator:"Valve",terrorists:"Balkan",counterTerrorists:"SEAL Team 6",location:"Russia",theme:"Industrial",picture:"../../assets/imgs/train.png",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_train.jpg?alt=media&token=938ec6ff-671f-4997-b7f1-bb7f7b8530cd",scenario:"Bomb defusal"},
    {nom:"Mirage",creator:"Valve",terrorists:"Elite Crew",counterTerrorists:"SAS",location:"Morocco",theme:"Suburban",picture:"../../assets/imgs/mirage.jpg",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_mirage.jpg?alt=media&token=c4e12f55-a1ff-4c89-ba79-dc943acbc9d9",scenario:"Bomb defusal"},
    {nom:"Nuke",creator:"Valve",terrorists:"Balkan",counterTerrorists:"SAS",location:"Nuclear plant USA",theme:"Industrial",picture:"../../assets/imgs/nuke.jpg",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_nuke.jpg?alt=media&token=84c400e1-24bf-4dd7-bf1d-9514cf7c7a03",scenario:"Bomb defusal"},
    {nom:"Overpass",creator:"Valve",terrorists:"Phoenix faction",counterTerrorists:"GSG9",location:"Germany",theme:"Urban",picture:"../../assets/imgs/overpass.jpg",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_overpass.jpg?alt=media&token=53ae59b8-d650-4497-be68-0158655c9250",scenario:"Bomb defusal"},
    {nom:"Cobblestone",creator:"Valve",terrorists:"Phoenix faction",counterTerrorists:"GIGN",location:"France",theme:"Castle",picture:"../../assets/imgs/cobblestone.png",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_cobblestone.jpg?alt=media&token=45b3cdf4-8a6f-4f42-9688-11986c8ee808",scenario:"Bomb defusal"},
    {nom:"Cache",creator:"FMPONE, Volcano, and penE",terrorists:"Separatist",counterTerrorists:"SEAL Team 6",location:"Chernobyl",theme:"Industrial",picture:"../../assets/imgs/cache.jpeg",map:"https://firebasestorage.googleapis.com/v0/b/papea-parc.appspot.com/o/callouts_cache.jpg?alt=media&token=61dbac1f-79f9-49bc-969e-bd7551199d5d",scenario:"Bomb defusal"}
  ]

  constructor() {
    console.log('Hello CompetitiveMapPoolProvider Provider');
  }

  getListMappool():Mappool[] {
    return this.listCompetitiveMapPool;
  }

}
