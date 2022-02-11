import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /*
    Establecemos el tipo de dato propio de la interface, asi evitamos el any
    @Input() dataInput: any;
  */
  @Input() dataCard: Game = {name: "", description: "", platform: "", img: ""};
  @Input() indexCard: number = 0;

  @Output() selectCard: EventEmitter<{item: number, card: Game}>;

  constructor() { 
    this.selectCard = new EventEmitter();
  }

  ngOnInit() {
    //console.log(this.dataCard);
    //console.log(this.indexCard);
  }

  buyGame(): void{
    this.selectCard.emit({item: this.indexCard, card: this.dataCard});
  }

}
