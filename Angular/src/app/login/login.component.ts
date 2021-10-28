import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Routes, RouterModule, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  email: string;
  password: string;
  islogin: boolean;
  constructor(private serviceUser: UserService , private router: Router) {}

  ngOnInit(): void {
  }
  connecter(){
    this.serviceUser.login(this.email, this.password).subscribe((data) => {
      data.forEach(e => {
        this.user = e;
      });
      console.log(this.user);
      if ( this.user != null){
        localStorage.setItem('currentUser', this.user.id.toString());
        if ( this.email === 'admin'){
          this.router.navigate(['admin']);
        }
        else{
          this.router.navigate(['home']);
        }
        console.log('login!!');
      }
      else {
        this.password = '';
        this.islogin = true;
      }
    });
  }

}
