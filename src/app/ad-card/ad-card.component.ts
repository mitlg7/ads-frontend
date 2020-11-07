import { Component, OnInit } from '@angular/core';
import {AdsService} from '../service/ads.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  public loading = true;

  constructor(private adsService: AdsService ) { }

  ngOnInit(): void {
    this.adsService.getAllAds()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false;
      });
  }

}
