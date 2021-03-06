import {Component, OnInit} from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-my-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.css']
})
export class UserAdsComponent implements OnInit {
   constructor(
    public adsService: AdsService,
    private storageService: StorageService,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle('Ваши объявления');
    const username = this.router.url.split('/')[2];
    this.adsService.getAdsByUsername(username);
  }

    delete(id: number): void{
    this.adsService.deleteAd(id).subscribe();
  }
}
