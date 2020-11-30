import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdsService} from '../../service/ads.service';
import {Title} from '@angular/platform-browser';
import {Ad} from '../../model/ad';
import {ResponseService} from '../../service/response.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StorageService} from '../../service/storage.service';
import {AdStatus} from '../../model/adStatus';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.css']
})
export class AdPageComponent implements OnInit {
  public ad: Ad ;
  public id: string;
  public form: FormGroup;
  public isAuthenticated = false;
  AdStatus: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adsService: AdsService,
    private titleService: Title,
    private responseService: ResponseService,
    public storageService: StorageService,
    public authService: AuthService
  ) {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.form = this.fb.group({
      idAd: [router.url.split('/').pop()],
      username: [''],
      message: [``],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.router.url.split('/').pop();
    this.adsService.getAd(this.id ).subscribe(
      (date) => {
        this.ad = date;
        this.titleService.setTitle(this.ad.name);
      }, error => {
        this.router.navigateByUrl('/not-found');
      } );
    }
  toResponse(): void {
    this.form.setValue({ username: [this.storageService.getUser().username]});
    this.responseService.createResp(this.form).subscribe();
    window.location.reload();
  }
    // FIXME Сделать страницу ошибки при null

  changeStatus(id: number, adStatus: string): void{
    this.adsService.changeStatusAd(id, adStatus).subscribe();
    window.location.reload();
  }
  isOwner(): boolean{
    if (!this.isAuthenticated){
      return false;
    }
    return this.storageService.getUser().username === this.ad.username;
  }
  delete(): void{
    this.adsService.deleteAd(this.ad.id).subscribe();
  }
}


