import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuthenticated = false;

  constructor(private authService: AuthService) {
  }
  logout(): void {
    this.authService.logout();
  }

}
