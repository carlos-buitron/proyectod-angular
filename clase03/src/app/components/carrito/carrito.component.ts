import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../games/games.component";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  //@Input() dataCarrito: Game;
  @Input() cantidad: number;
  @Input() dataCarrito: {item: number, card: Game};

  constructor() { }

  ngOnInit() {
    console.log(this.cantidad);
  }

}
