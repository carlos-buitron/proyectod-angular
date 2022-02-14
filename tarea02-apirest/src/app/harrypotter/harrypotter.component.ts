import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from "../services/harrypotter/harrypotter.service";

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  constructor(private harrypotterService: HarrypotterService) { }

  harryPotter: any;

  ngOnInit() {
    this.getHarrypotter();
  }

  getHarrypotter(): void{
    this.harrypotterService.getHarrypotter().subscribe(response => {
      this.harryPotter = response;
    })
  }

}
