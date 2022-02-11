import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg:any){
    /*
      code, msg, actionCallback
    */
    console.log(msg);
  }

  error(msg:any){
    console.error(msg);
  }

  warn(msg:any){
    console.warn(msg);
  }

  methodExample(){
    return "Hola";
  }
  /* Importacion de nuestro servicio al componente */

}
