import {Component, OnInit} from '@angular/core';
import {AdsService} from '../../service/ads.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formFilter: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public adsService: AdsService,
    public fb: FormBuilder
  ) {
    this.formFilter = this.fb.group({
      minCost: 0,
      maxCost: 0,
      adType: [``],
      adCategory: [``]
    });
  }

  ngOnInit(): void {
  }
  filer(): void{
    this.adsService.getAdsByFilter(this.formFilter);
  }
  clearFilter(): void{
    this.formFilter = this.fb.group({
      minCost: 0,
      maxCost: 0,
      adType: [``],
      adCategory: [``]
    });
    this.adsService.getAllAds();
  }

}
