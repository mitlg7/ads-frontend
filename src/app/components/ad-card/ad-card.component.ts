import { Component, OnInit } from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {
  p = 1;
  query = '';
  constructor(private router: Router,
              public adsService: AdsService,
              private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Alito 64');
     // FIXME Сделать норм парсинг сеарч

    if (this.router.url.indexOf('search') !== -1){
      const query = this.router.url.split('name=').pop();

      this.adsService.getAdBySearch(query);
    }else {
      this.adsService.getAllAds();
    }
  }
  search(): void {
    if (this.query !== ''){
      this.router.navigateByUrl('/search?name=' + this.query).then(window.location.reload);
    }
  }
}
