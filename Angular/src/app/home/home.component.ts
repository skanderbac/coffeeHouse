import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Routes, RouterModule, ActivatedRoute, Router} from '@angular/router';
import {AuthServiceService} from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  id: number
  constructor(private serviceUser: UserService, private AuthUser: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.AuthUser.currentUserValue;
    this.serviceUser.searchUser(this.id).subscribe(data => this.user = data);
  }
}
