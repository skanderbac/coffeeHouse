import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listUser: User[];
  recherche: string;
  constructor(private serviceProduct: UserService) { }

  ngOnInit(): void {
    this.serviceProduct.getUserWS().subscribe(
      (data: User[]) => this.listUser = data.filter(user => user.id != 5)
    );
    this.recherche = '';

  }
  delete(id) {
    this.serviceProduct.deleteUser(id).subscribe(
      () => this.listUser = this.listUser.filter(user => user.id != id)
    );
  }
}
