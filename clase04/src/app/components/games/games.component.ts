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

  constructor() {
    this.gamesService = new GamesService();
  }

  ngOnInit() {
    this.setup();
  }

  setup(): void{
    this.items = this.gamesService.getData();
  }

  addCarrito(element: any): void{
    //console.log("Se agrego este item al carrito", element);
    this.itemsCarrito.push(element);
  }


}
