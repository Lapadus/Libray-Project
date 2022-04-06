import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //aducem baseURL din app
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCases(countryAB:string){ //am luat de la acel url countryAB
    return this.http.get(`${this.baseURL}/cases?ab=${countryAB}`)
  }
}
