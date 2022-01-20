import { Component, OnInit } from '@angular/core';

@Component({
  /*Metadata*/
  selector: 'app-home', /* Etiqueta por la cual vamos a llamar a nuestro componente */
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// OnInit es uno de los ciclos de vida de Angular de los componentes
export class HomeComponent implements OnInit {

  title:string = "Curso de Angular Escalab";
  constructor() { }

  // Es el metodo que hace cargar basicamente los elementos al inicio del componente
  // Pero se carga primer el constructor constructor(){} esto por jerarquia
  /*
    ngOnInit(): void {

    }
  */

  ngOnInit() {
  }


}
