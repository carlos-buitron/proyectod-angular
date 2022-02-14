import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  constructor(private httpClient: HttpClient) { }

  API_PATH: string = "https://thronesapi.com";

  getData(): Observable<any>{
    return this.httpClient.get(`${this.API_PATH}/api/v2/Characters`);
  }

}
