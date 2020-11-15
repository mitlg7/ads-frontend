import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AdminService{

  constructor(private http: HttpClient) {
  }

}
