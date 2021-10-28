import { Component, OnInit } from '@angular/core';
import {Coffee} from '../model/coffee';
import {CoffeeService} from '../service/coffee.service';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  listCoffee: Coffee[];
  recherche: string;
  constructor(private serviceProduct: CoffeeService) { }

  ngOnInit(): void {
    this.serviceProduct.getCoffee().subscribe(
      (data: Coffee[]) => this.listCoffee = data
    );
    this.recherche = '';

  }

}
