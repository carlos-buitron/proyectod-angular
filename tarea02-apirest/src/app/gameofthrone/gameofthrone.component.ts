import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from "../services/gameofthrone/gameofthrone.service";

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  constructor(private gameofthroneService: GameofthroneService) { }

  gameOfthrone: any;

  ngOnInit() {
    this.getGameofthrone();
  }

  getGameofthrone(): void {
    this.gameofthroneService.getData().subscribe(response => {
      this.gameOfthrone = response;
      console.log(response);
    });
  }

}
