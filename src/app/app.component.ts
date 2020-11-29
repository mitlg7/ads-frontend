import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public isAuthenticated = false;
  username: string;
  constructor(public authService: AuthService) {
  }
  logout(): void {
    this.authService.logout();

  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated){
      this.username = this.authService.user.username;
    }
  }

}
