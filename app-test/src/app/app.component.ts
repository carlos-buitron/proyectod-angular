import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-test';

  constructor(){
    this.prueba();
  }

  prueba = () => {
    let a = 5;
    setTimeout(() => {
      console.log("Entro despues de 5 segundos");
      a = 100;
      console.log("El valor de la variable a es " + a);
    }, 5000);
    console.log("Te mando un mensaje luego de  5 segundos");
    console.log("El valor de a es " + a);
  };

  activar(persona     : string, 
          tiempo     ?: string, 
          lugarDefecto:  string = "batiseñal" ){

  }


  avenger = {
    nombre: "Steve",
    clave: "Capitan America", 
    poder: "fuerza"
  }

  extraer = ({nombre, clave}: any) => {

  };

}
