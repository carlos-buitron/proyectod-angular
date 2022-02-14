import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";

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

  private gamesService: GamesService;

  items: Game[] = [];
  itemsCarrito: Game[] = [];
  local:any = [];
  constructor() {
    this.gamesService = new GamesService();
  }

  ngOnInit() {
    this.setUp();
  }

  setUp(): void{
    this.items = this.gamesService.getData();
    /* 
     Cuando inicia el componente revisame si tengo elementos del carrito almacenado en la 
     memoria de mi navegador.
    */
    this.local = localStorage.getItem("carrito");
    /* 
    Cuando cargue la pagina quiero que me valide si hay elementos del carrito en el 
    localStorage.
    Cada vez que cargue la pagina va preguntar, tienes algo en el localStorage? Si tiene algo 
    entonces lo que va hacer es tomar los elementos del localStorage y pasarselo a la lista 
    de elementos del carrito para que lo vuelva a renderizar en el componente.

    La variable this.local puede venir como no puede venir (null, "undefined") por ello usamos 
    la interrogación this.local?

    */
    //let valor = this.local? this.local.length : this.local;
    if(this.local && this.local != undefined && this.local.length > 0){
      console.log("Existen elementos en el carrito");
      // Para recuperar las propiedades del objeto utilizo el parse
      this.itemsCarrito = JSON.parse(this.local);
    }
  }

  addCarrito(element: any): void{
    //console.log("Se agrego este item al carrito", element);
    this.itemsCarrito.push(element);
    // localStorage para setear elementos debe ser de tipo String
    localStorage.setItem("carrito", JSON.stringify(this.itemsCarrito)); 
  }

  deleteElement(element: any): void{
    console.log("elemento que entra", element);
    console.log("se eliminará ", this.itemsCarrito[element]);
    let index = this.itemsCarrito.indexOf(this.itemsCarrito[element]);
    console.log(index);
    if(index > -1){
      this.itemsCarrito.splice(index, 1); // Quitar un solo elemento del array
      localStorage.setItem("carrito", JSON.stringify(this.itemsCarrito)); 
      /* 
      localStorage es una palabra reservada de Javascript pero tambien es un elemento 
      dentro del navegador.
      En localStorage crea un elemento que se va a llamar "carrito" con el valor de un JSON.
      Cada vez que elimines del carrito tambien actualiza el localStorage.
      */
    }
  }


}
