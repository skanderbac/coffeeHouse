import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {AuthServiceService} from '../service/auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private serviceAuth: AuthServiceService , private router: Router) { }

  ngOnInit(): void {
    this.serviceAuth.logout();
    this.router.navigate(['login']);
  }

}
