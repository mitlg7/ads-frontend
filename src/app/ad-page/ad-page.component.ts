import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Ad, AdsService} from '../service/ads.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.css']
})
export class AdPageComponent implements OnInit {
  public ad: Ad ;
  public id: string;
  constructor(
    private router: Router,
    private adsService: AdsService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/').pop();
    this.adsService.getAd(this.id ).subscribe(
      (date) => {
        this.ad = date;
        this.titleService.setTitle(this.ad.name);
      } );

    // FIXME Сделать страницу ошибки при null
  }

}
