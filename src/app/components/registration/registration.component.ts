import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formRegistration: FormGroup;

  constructor(public fb: FormBuilder,
              private http: HttpClient,
              private titleService: Title
  ) {
    this.formRegistration = this.fb.group({
      username: [``],
      password: [``],
      email: [``],
      firstName: [``],
      secondName: [``],
      patronymic: [``],
      birthday: [``]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Регистрация');
  }

  registration(): void {
    const formData: any = new FormData();
    formData.append('username', this.formRegistration.get(`username`).value);
    formData.append('password', this.formRegistration.get(`password`).value);
    formData.append('email', this.formRegistration.get(`email`).value);
    formData.append('firstName', this.formRegistration.get(`firstName`).value);
    formData.append('secondName', this.formRegistration.get(`secondName`).value);
    formData.append('patronymic', this.formRegistration.get(`patronymic`).value);
    formData.append('birthday', this.formRegistration.get(`birthday`).value);
    this.http.post<any>('http://localhost:8080/register', this.formRegistration.value).subscribe();
  }
}
