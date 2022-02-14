import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataCard: Game = {name: "", description: "", platform: "", img: ""};
  @Input() indexCard: number = 0;

  @Output() selectCard: EventEmitter<any>;

  

  constructor(private router: Router) { 
    this.selectCard = new EventEmitter();
  }

  ngOnInit() {
  }

  buyGame(): void{
    this.selectCard.emit(this.indexCard);
  }

  detailGame(index: any): void{
    this.router.navigate(['game', index]);
  }

}
