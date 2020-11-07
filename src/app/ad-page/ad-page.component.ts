import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Ad, AdsService} from '../service/ads.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.css']
})
export class AdPageComponent implements OnInit {
  private ad: Ad ;
  private id: string;
  constructor(
    private router: Router,
    private adsService: AdsService
  ) { }

  ngOnInit(): void {
    console.log(this.id = this.router.url.split('/').pop());
    this.adsService.getAd(this.id ).subscribe(date => this.ad = date);

  }

}
