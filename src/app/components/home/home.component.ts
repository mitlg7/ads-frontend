import { Component, OnInit } from '@angular/core';
import {AdsService} from '../../service/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public adsService: AdsService) { }

  ngOnInit(): void {
  }

  search(): void{
    this.adsService.getAdBySearch('e');
  }

}
