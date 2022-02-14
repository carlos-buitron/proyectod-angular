import { Component, OnInit } from '@angular/core';
import { DogsService } from "../services/dogs.service";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dog: any;

  constructor(private dogsService: DogsService) {

  }

  ngOnInit() {
    this.getDog();
  }

  getDog(): void{
    this.dogsService.getDog().subscribe( response => { 
      /*
       El servicio me va traer un observable, entonces tengo que suscribirme 
       para que cuando el observable tenga un valor o cambie su valor a mi 
       me notifique que hay un cambio en el estado del objeto que estoy 
       llamando para eso utilizo el suscribe.
      */
      console.log(response);
      this.dog = response.url;
      if(this.dog.includes('mp4')){
        this.getDog();
      }
    });
  }

}
