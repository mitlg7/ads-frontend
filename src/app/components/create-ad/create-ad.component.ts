import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {AdsService} from '../../service/ads.service';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {
  files: any;
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private adsService: AdsService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: storageService.getUser().username,
      name: [``],
      address: [``],
      description: [``],
      cost: [``],
      adCategory: [``],
      adType: [``],
      photo: [``]
      });
  }

  createAd(): void{
    this.adsService.createAd(this.form).subscribe(
      (response) => this.router.navigateByUrl('/').then(() => location.reload()),
      (error) => this.router.navigateByUrl('/').then(() => location.reload()));
  }

  ngOnInit(): void {
    this.titleService.setTitle('Создание объявления');
  }

}
