import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from "../../services/games.service";


@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent implements OnInit {

  game: any;

  constructor( private activatedRoute: ActivatedRoute, private gamesService: GamesService) { 
    this.activatedRoute.params.subscribe( data => {
      this.game = gamesService.getGames(data.id);
      console.log(this.game);
    });
  }

  ngOnInit() {
  }

}
