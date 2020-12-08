import { Component, OnInit } from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {AdStatus} from '../../model/adStatus';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
    public adsService: AdsService,
    private titleService: Title
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Admin панель');
    this.adsService.getAllAdsByAdmin();
  }

  delete(id: number): void{
    this.adsService.deleteAd(id).subscribe();
  }


}
