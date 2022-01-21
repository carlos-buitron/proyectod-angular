import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private personas:any[] = [

    {
      nombre:"Carlos Edgar",
      paterno: "Buitrón",
      materno: "Quispe",
      edad: 23,
      estudia: "Angular",
      plataforma: "Escalab Academy",
      pais: "Chile",
      img: "./assets/imedads/cbuitron.jpg"      
    },
    {
      nombre:"Hermis",
      paterno: "Buitrón",
      materno: "Quispe",
      edad: 30,
      estudia: "Data Analysis Python",
      plataforma: "Escalab Academy",
      pais: "Chile",
      img: "./assets/imedads/hbuitron.jpg"     
    },
    {
      nombre:"Greylin Danitza",
      paterno: "Solis",
      materno: "Jaime",
      edad: 25,
      estudia: "Desarrollo web",
      plataforma: "Ninguna",
      pais: "Perú",
      img: "./assets/imedads/gsolis.jpg"       
    },
    {
      nombre:"Pepe",
      paterno: "Miente",
      materno: "Nomas",
      edad: 22,
      estudia: "Spring Boot",
      plataforma: "Ninguna",
      pais: "Cuba",
      img: "./assets/imedads/pmiente.jpg"       
    },
    {
      nombre:"Miguel Juan Sebastián",
      paterno: "Piñera",
      materno: "Echenique",
      edad: 72,
      estudia: "Javascript Master",
      plataforma: "Escalab",
      pais: "Chile",
      img: "./assets/imedads/mpiñera.jpg"       
    }
  ];

  getPersonas(){
    return this.personas;
  }

}
