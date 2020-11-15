import { Component, OnInit } from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public adsService: AdsService,
    private titleService: Title,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Admin панель');
    this.adsService.getAllAds().pipe().subscribe();
  }

  delete(id: number): void{
    // TODO проверить сервис на фронте
    this.adsService.deleteAd(id).subscribe();
  }

}
