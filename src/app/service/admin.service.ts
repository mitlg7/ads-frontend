import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AdStatus} from '../model/adStatus';

const API_URL: string = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AdminService{

  constructor(
    private http: HttpClient
  ) {
  }



}
