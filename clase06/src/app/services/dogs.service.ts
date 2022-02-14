import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  urlDog = "https://random.dog/woof.json";
  
  constructor(private httpClient: HttpClient) { 

  }

  getDog(): Observable<any>{
    return this.httpClient.get(this.urlDog);
  }
}
