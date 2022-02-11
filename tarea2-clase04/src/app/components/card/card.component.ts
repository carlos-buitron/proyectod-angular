import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataCard: Game = {name: "", description: "", platform: "", img: ""};
  @Input() indexCard: number = 0;

  @Output() selectCard: EventEmitter<{item: number, card: Game}>;

  constructor() { 
    this.selectCard = new EventEmitter();
  }

  ngOnInit() {
  }

  buyGame(): void{
    this.selectCard.emit({item: this.indexCard, card: this.dataCard});
  }

}
