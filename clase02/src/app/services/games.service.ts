import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private items:any[] = [

    {
      name:"Mortal Kombat"
      
    }
  ];
  constructor() { }
}
