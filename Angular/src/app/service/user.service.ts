import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users';
  user: User;
  private loggedin: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.loggedin = false;

  }
  setLoggedIn(value: boolean){
    this.loggedin = value;
  }
  getLoggedin(){
    return this.loggedin;
  }
  getUserWS(){
    return this.http.get<User[]>(this.url);
  }
  deleteUser(id){
    return this.http.delete(this.url + '/' + id);
  }
  postUser(user: User){
    return this.http.post(this.url + '/'  , user).subscribe((res: any) => {
      localStorage.setItem('currentUser', user.id.toString());
    });
  }
  updateUser(user){
    return this.http.put(this.url + '/' + user.id, user );
  }
  login(email, password){
    return this.http.get<any>(this.url + '?email=' + email + '&password=' + password );
  }

  searchUser(id): Observable<User>{
    console.log(this.url + '?id=' + id);
    return this.http.get<User>(this.url + '/' + id);
  }
}
