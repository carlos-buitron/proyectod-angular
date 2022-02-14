import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  urlPaises = "https://restcountries.com/v2/lang/es";
  
  constructor(private httpClient: HttpClient) { 

  }

  getPaises(): Observable<any>{
    return this.httpClient.get(this.urlPaises);
  }
}
