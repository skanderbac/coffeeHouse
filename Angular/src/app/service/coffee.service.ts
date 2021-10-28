import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coffee} from '../model/coffee';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  url = 'http://localhost:8080/SpringMVC/allCoffee';
  constructor(private http: HttpClient) {
  }
  getCoffee(){
    return this.http.get<Coffee[]>(this.url);
  }
}
