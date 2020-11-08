import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Ad{
  id: number;
  userId: number;
  name: string;
  address: string;
  description: string;
  cost: number;
  date?: any;
  adStatus: string;
  adCategory: string;
  adType: string;
  photos: string[];
}

@Injectable({providedIn: 'root'})
export class AdsService{
  public ads: Ad[] = [];

  constructor(private http: HttpClient) {}

  getAllAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`https://mitlg.herokuapp.com/ad/all/`).pipe(tap(ads => this.ads = ads));
  }

  getAd(id: string): Observable<Ad>{
    return this.http.get<Ad>(`https://mitlg.herokuapp.com/ad/` + id);
  }

  getAdsByUserId(id: string): Observable<Ad[]>{
    return null;
  }

}
