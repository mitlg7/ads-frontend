import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AuthService{
  user: User;
  constructor(private http: HttpClient, private storageService: StorageService) {
    this.user = storageService.getUser();
  }
  login(form: FormGroup): Observable<any> {
    return this.http.post<any>(API_URL + '/login', form.value);
  }
  register(form: FormGroup): Observable<any> {
    return this.http.post<any>( API_URL + '/register', form.value);
  }

  logout(): void {
    this.storageService.clearStorage();
  }

  isAuthenticated(): boolean {
    return this.storageService.getToken() != null;
  }
}