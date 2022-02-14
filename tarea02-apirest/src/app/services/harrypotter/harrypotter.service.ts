import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  constructor(private httpClient: HttpClient) { }

  API_PATH: string = "https://hp-api.herokuapp.com";

  getHarrypotter(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_PATH}/api/characters/house/Hufflepuff`);
  }

}
