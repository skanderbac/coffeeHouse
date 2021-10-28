import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user';
import {Routes, RouterModule, ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  @Output() eventSaveProduct = new EventEmitter<User>();
  constructor(private serviceUser: UserService , private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
  save(){
    this.serviceUser.postUser(this.user);
    this.router.navigate(['login']);
  }

}
