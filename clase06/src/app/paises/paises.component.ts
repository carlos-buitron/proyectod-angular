import { Component, OnInit } from '@angular/core';
import { PaisesService } from "../services/paises.service";

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService) { }

  paises: any;

  ngOnInit() {
    this.getPaises();
  }

  getPaises(): void {
    this.paisesService.getPaises().subscribe( response => {
      this.paises = response;
      console.log(this.paises);
    });
  }

}
