import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";
// Importamos el servicio GamesService porque queremos consumir los datos

/*
  Se define "interface Game{}" para el componente games.component.ts , pero para todos 
  los demas componentes definir como "export interface Game{}"
*/
export interface Game {
  name: string, 
  description: string,
  platform: string,
  img: string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  // Creamos una variable privada del Servicio
  private gamesService: GamesService;

  /* 
    items:any [] = []; Crear un arreglo de tipo any inicializado vacio, para no utilizar el tipo 
    de dato any creamos una interfaz Game {}
  */
  items: Game[] = [];
  itemsCarrito: Game[] = [];
  countCard: number = 0;
  arrayCard: Game[] = [];

  constructor() {
    this.gamesService = new GamesService();
  }

  /*
    Forma 2 mejor forma

    constructor(private gamesService GamesService) {
      
    }

  */

  ngOnInit() {
    //console.log(this.gamesService.getGames());
    this.setup();
  }

  /*
    Método setup() para cargar las variables iniciales que necesito para que mi componente 
    funcione correctamente. 
    Este método va acargar mis items desde el servicio GamesService.
  */

  setup(): void{
    this.items = this.gamesService.getGames();
    //console.log(this.items);
  }

  /*
    Método que recibe la accion de cambio de informacion desde el componente Hijo Card
  */

  /*addCarrito(element: any): void{
    console.log("Se agrego este item al carrito", element);
    this.itemsCarrito.push(element);
  }*/

  addCarrito({item, card}: {item: number, card: Game}): void{
    this.itemsCarrito.push(card);
  }

  /*addCarrito({item, card}: {item: number, card: Game}): void{
    
    
     Si no se encuentra en una lista inicial pues que lo muestra en la lista de carrito, en caso que ya existe 
     aumenta el contador numerico, asi evitamos que se agregue repeticiones en la lista de carrito
    
    if(!this.itemsCarrito.includes(card)){
       this.itemsCarrito.push(card);
       console.log("Se agrego este item al carrito", {item, card});
        
    }
    this.arrayCard.push(card);
    this.countCard = this.arrayCard.filter(el => el == card).length;

    console.log(item, this.countCard);

  }*/


}
