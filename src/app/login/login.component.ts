import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title
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
    const formData: any = new FormData();
    formData.append('username', this.formLogin.get(`username`).value);
    formData.append('password', this.formLogin.get(`password`).value);
    // TODO
    // this.http.post('https://mitlg.herokuapp.com/ad', formData).subscribe(

}

}
