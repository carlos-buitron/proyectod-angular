import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private items:any[] = [

    {
      name:"Super Mario Kart",
      descripcion: "Juego de aventuras",
      platform: "Ninguno",
      img: "./assets/images/mk.jpg"      
    },
    {
      name:"Gran turismo",
      descripcion: "Juego de carreras",
      platform: "PlayStation",
      img: "./assets/images/gt.jpg"      
    },
    {
      name:"GTA",
      descripcion: "Juego de aventuras",
      platform: "Todas las plataformas",
      img: "./assets/images/gta.jpg"      
    },
    {
      name:"Mortal Kombat",
      descripcion: "Juego de peleas",
      platform: "Todas las plataformas",
      img: "./assets/images/mortalk.jpg"      
    }
  ];
  constructor() { }

  getGames(){
    return this.items;
  }
}
