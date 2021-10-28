import { Component, OnInit } from '@angular/core';
import {Coffee} from '../model/coffee';
import {CoffeeService} from '../service/coffee.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  listCoffee: Coffee[];
  coff: Coffee;
  recherche: string;
  constructor(private serviceProduct: CoffeeService, private router: Router) { }

  ngOnInit(): void {
    this.serviceProduct.getCoffee().subscribe(
      (data: Coffee[]) => this.listCoffee = data
    );
    this.recherche = '';
    this.coff = new Coffee();
  }
  delete(coffee: Coffee) {
    this.serviceProduct.deleteCoffee(coffee).subscribe(
      () => this.listCoffee = this.listCoffee.filter(user => user.id != coffee.id)
    );
  }
  add(){
    this.serviceProduct.addCoffee(this.coff);
    this.router.navigate(['coffee']);
  }

}
