import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

const API_URL: string = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class UserService{

  constructor(private http: HttpClient) {
  }

  getUserById(id: string): Observable<User>{
    return null;
  }
  getAllUsers(): Observable<User[]>{
    return null;
  }

  getUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(API_URL + '/user/' + username);
  }

  putUser(form: FormGroup): Observable<any>{
    return this.http.put(API_URL + '/user', form);
  }

}
