import { Component, OnInit, Output, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  id: number;
  constructor( private service: ActivatedRoute, private serviceUser: UserService, private router: Router) {
  }
  ngOnInit(): void {
    this.user = new User();
    this.id = this.service.snapshot.params.id;
    this.serviceUser.searchUser(this.id).subscribe((data) => {
      this.user = data;
      this.registerForm = new FormGroup({
      nom: new FormControl(this.user.nom),
      prenom: new FormControl(this.user.prenom),
      email: new FormControl(this.user.email),
      dateNaissance: new FormControl(this.user.dateNaissance),
      cin: new FormControl(this.user.cin),
      numero: new FormControl(this.user.numero),
      password: new FormControl(this.user.password),
        id: new FormControl(this.user.id)
    });
    });
  }
  onSubmit(){
    console.log(this.registerForm.value);
    this.serviceUser.updateUser(this.registerForm.value).subscribe();
    this.router.navigate(['home']);
  }
}
