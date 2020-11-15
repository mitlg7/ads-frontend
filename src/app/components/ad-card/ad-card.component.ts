import { Component, OnInit } from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  public loading = true;

  constructor(private router: Router,
              public adsService: AdsService,
              private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Alito 64');
     // FIXME Сделать норм парсинг сеарч
    if (this.router.url.indexOf('search') != -1){
      const query = this.router.url.split('name=').pop();
      this.adsService.getAdBySearch(query)
        .pipe()
        .subscribe(
          () => this.loading = false
        );
    }else {
      this.adsService.getAllAds()
        .pipe(delay(750))
        .subscribe(() => {
          this.loading = false;
        });
    }
  }
  search(): void{
    this.loading = true;
    this.adsService.getAdBySearch('e').pipe().subscribe(() => this.loading = false );
  }

}
