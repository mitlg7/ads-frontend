import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Response} from '../model/response';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

const API_URL: string = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class ResponseService{
  public response: Response[];
  constructor(private http: HttpClient) {
  }
  getByUsername(username: string): void{
    this.http.get<Response[]>(API_URL + `/response/user?username=` + username).subscribe(
      data => this.response = data
    );
  }
  getForUsernameNew(username: string): void{
    this.http.get<Response[]>(API_URL + `/response/user/new?username=` + username).subscribe(
      data => this.response = data
    );
  }
  getByAdId(id: bigint): void{
    this.http.get<Response[]>(API_URL + `/response/item?id=` + id).subscribe(
      data => this.response = data
    );
  }
  deleteById(id: bigint): Observable<any>{
    this.response = this.response.filter(r => r.id !== id);
    return this.http.delete<any>(API_URL + `/response?id=` + id);

  }
  createResp(form: FormGroup): Observable<any>{
    return this.http.post(API_URL + '/response', form.value);
  }

  read(id: bigint): Observable<any>{
    this.response = this.response.filter(r => r.id !== id);
    return this.http.post(API_URL + `/response/read`, id);
  }
}
