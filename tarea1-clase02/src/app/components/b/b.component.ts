import { Component, OnInit } from '@angular/core';
import { PersonService } from "../../services/person.service";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  private componenteB:string = "Componente B";

  private personService:PersonService;

  private personas: any[];

  private esVisible:boolean = false;
  
  constructor(){
    this.personService = new PersonService();    
  }

  ngOnInit() {
  }

  listarPersonas(){
    try {
        this.esVisible = true;
        this.personas = this.personService.getPersonas();
    } catch(error) {
      console.log(error);
    }
  }

}
