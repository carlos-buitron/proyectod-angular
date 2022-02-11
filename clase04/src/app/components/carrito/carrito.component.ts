import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() dataCarrito: any;
  game: any;

  private gamesService: GamesService;
  constructor() { 
    this.gamesService = new GamesService();
  }

  ngOnInit() {
    console.log("data " + this.dataCarrito);
    this.game = this.gamesService.getGames(this.dataCarrito);
  }

}
