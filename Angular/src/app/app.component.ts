import { Component } from '@angular/core';
import {AuthServiceService} from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet Angular';
  connect: boolean;
  constructor(private authservice: AuthServiceService) {
    this.connect = !!this.authservice.currentUserValue;
  }

}
