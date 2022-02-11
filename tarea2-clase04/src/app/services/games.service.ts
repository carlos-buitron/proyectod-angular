import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  /* 
    Privado porque quiero no que se accede a este dato desde ningun otro componente 
    y de momento que sea de tipo "any", ante la falta de un "id" usamos el index.
  */
  private items:any[] = [
    {
      name:"Super Mario Kart",
      description: "Juego de aventuras",
      platform : "Nintendo",
      img : "./assets/images/mariokart.jpg"
    },
    {
      name:"Gran turismo",
      description: "Juego de carreras",
      platform : "PlayStation",
      img : "./assets/images/gt.jpg"
    },
    {
      name:"GTA",
      description: "Juego de aventuras",
      platform : "Todas las plataformas",
      img : "./assets/images/gta.jpg"
    },
    {
      name:"Mortal Kombat",
      description: "Juego de peleas",
      platform : "Todas las plataformas",
      img : "./assets/images/mk.jpg"
    },
    {
      name:"Pokemon",
      description: "Juego de estrategia y aventura",
      platform : "Nintendo Switch",
      img : "./assets/images/pokemon.jpg"
    }
  ];
  constructor() { }

  getGames(){
    return this.items;
  }
}
