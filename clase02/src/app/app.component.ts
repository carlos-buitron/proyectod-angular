import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

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

  constructor(private logger:LoggerService){

  }

  verData(msg:string){
    console.log(msg);
  }

  clickme(username:string) {
    console.log('it does nothing',username);
  }

  funcionPrueba(){
    let name = "Carlos";
    this.title = "Nuevo Titulo";
  }
}
