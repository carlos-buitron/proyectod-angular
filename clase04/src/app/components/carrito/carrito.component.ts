import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() dataCarrito: any;
  @Input() indexElement: any;
  @Output() gameDelete: EventEmitter<any>;
  game: any;

  private gamesService: GamesService;
  constructor() { 
    this.gamesService = new GamesService();
    this.gameDelete = new EventEmitter();
  }

  ngOnInit() {
    console.log("data " + this.dataCarrito);
    this.game = this.gamesService.getGames(this.dataCarrito);
  }

  deleteElement(index: any): void{
    this.gameDelete.emit(index);
  }

}
