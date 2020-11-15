import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Ad} from '../model/ad';
import {environment} from '../../environments/environment';
import {FormGroup} from '@angular/forms';

const API_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AdsService{
  public ads: Ad[] = [];

  constructor(private http: HttpClient) {}

  getAllAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(API_URL + `/ad/all/`).pipe(tap(ads => this.ads = ads));
  }

  getAd(id: string): Observable<Ad>{
    return this.http.get<Ad>(API_URL + `/ad/` + id);
  }

  getAdBySearch(query: string): Observable<Ad[]>{
    this.ads = [];
    return this.http.get<Ad[]>(API_URL + `/ad/search?name=` + query).pipe(tap(ads => this.ads = ads));
  }

  createAd(form: FormGroup): Observable<any>{
    return this.http.post( API_URL + `/ad`, form);
  }

  getAdsByUserId(id: string): Observable<Ad[]>{
    return null;
  }

  deleteAd(id: number): Observable<any>{
    return this.http.delete(API_URL + '/ad/' + id);
  }

}
