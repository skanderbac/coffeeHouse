import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  url = 'http://localhost:8080/SpringMVC/servlet/query';
  constructor(private http: HttpClient) {
  }
  getVoiture(){
    return this.http.get<Voiture[]>(this.url);
  }
}
