import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { GamesService } from "./services/games.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables Globales
  title:string = 'Curso de Angular Escalab';
  tecnologias:string = "Angular CLI";

  username:string = 'Valor inicial';

  /* Primera Forma importar un servicio
  constructor(private logger:LoggerService){

  }*/

  /* Segunda Forma importar un servicio */
  private logger: LoggerService;
  private games: GamesService;
  constructor(){
      this.logger = new LoggerService();
      this.games = new GamesService();
  }


  verData(msg:string){
    console.log(msg);    
    this.logger.methodExample();
    try{
        this.logger.log("Iniciando método verData()");
        console.log(this.games.getGames());
    } catch (error) {
      this.logger.error(error);
    }
  }

  clickme(username:string) {
    console.log('it does nothing',username);
  }

  funcionPrueba(){
    let name = "Carlos";
    this.title = "Nuevo Titulo";
  }
}
