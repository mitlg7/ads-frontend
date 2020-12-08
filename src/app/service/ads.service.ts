import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ad} from '../model/ad';
import {environment} from '../../environments/environment';
import {FormGroup} from '@angular/forms';

const API_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AdsService{
  public ad: Ad[];
  public loading: boolean;
  constructor(private http: HttpClient) {
    this.loading = true;
  }

  getAllAds(): void {
    this.http.get<Ad[]>(API_URL + `/item/all/`).subscribe(
      data => {
        this.ad = data;
        this.loading = false;
      }
    );
  }

  getAllAdsByAdmin(): void{
    this.http.get<Ad[]>(API_URL + `/item/admin/all`).subscribe(
      data => {
        this.ad = data;
        this.loading = false;
      }
    );
  }

  getAd(id: string): Observable<Ad>{
    return this.http.get<Ad>(API_URL + `/item/` + id);
  }

  getAdBySearch(query: string): void{
    this.http.get<Ad[]>(API_URL + `/item/search?name=` + query).subscribe(
      data => {
        this.ad = data;
        this.loading = false;
      }
    );
  }

  getAdsByUsername(username: string): void{
    this.http.get<Ad[]>(API_URL + '/user/' + username + '/items').subscribe(
      data => {
        this.ad = data;
        this.loading = false;
      }
    );
  }

  getAdsByFilter(filterForm: FormGroup): void{
    Object.keys(filterForm.value).forEach((key) => {
      if (filterForm.value[key] == null) {
        delete filterForm.value[key];
      }
    });
    this.http.get<Ad[]>(API_URL + `/item/all`, {params: filterForm.value})
      .subscribe(
        (data) => {
          if (data.length){
            this.ad = data;
          }else {
            this.ad = [];
          }
        }
      );
  }

  createAd(form: FormGroup): Observable<any>{
    return this.http.post<any>( API_URL + `/item`, form.value);
  }

  deleteAd(id: number): Observable<any>{
    this.ad = this.ad.filter(ad => ad.id !== id);
    return this.http.delete(API_URL + '/item/' + id);
  }

  changeStatusAd(adId: number, adStatus: string): Observable<any>{
    return this.http.put<any>( API_URL + '/item/set/status', { adId, adStatus });
  }


}
