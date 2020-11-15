import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {StorageService} from '../../service/storage.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private storageService: StorageService,
    public fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private authService: AuthService
  ) {
    this.formLogin = this.fb.group({
      username: [``],
      password: [``]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Авторизация');
  }

  auth(): void {
    this.authService.login(this.formLogin)
      .subscribe(response => {
        this.storageService.saveToken(response.token);
        this.storageService.saveUser(new User(response));
      });
    // const formData: any = new FormData();
    // formData.append('username', this.formLogin.get(`username`).value);
    // formData.append('password', this.formLogin.get(`password`).value);
    // // TODO
    // // this.http.post('https://mitlg.herokuapp.com/ad', formData).subscribe(

}

}
