import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public user: User;
  public loading = true;
  public edit = true;
  public userForm: FormGroup;
  constructor(
    public authService: AuthService,
    private http: HttpClient,
    private titleService: Title,
    private userService: UserService,
    private router: Router,
    public storageService: StorageService,
    private builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Профиль');
    const temp = this.router.url.split('/').pop();
    this.userService.getUserByUsername(temp)
      .subscribe(res => {
        this.user = res;
        this.userForm = this.builder.group({
          username:  new FormControl({value: this.user.username, disabled: true},   Validators.required),
          firstName:  new FormControl({value: this.user.firstName, disabled: true},   Validators.required),
          secondName: new FormControl({value: this.user.secondName, disabled: true},   Validators.required),
          patronymic: new FormControl({value: this.user.patronymic, disabled: true},   Validators.required),
          phone: new FormControl({value: this.user.phone, disabled: true},   Validators.required),
          email: new FormControl({value: this.user.email, disabled: true},   Validators.required),
          birthday: new FormControl({value: this.user.birthday, disabled: true},   Validators.required),
        });
        this.loading = false;
      }, () => {
        this.router.navigateByUrl('/not-found');
      } );
  }

  isOwner(): boolean{
    if (!this.authService.isAuthenticated()){
      return false;
    }
    return this.storageService.getUser().username === this.user.username;
  }

  saveEdit(): void{
    this.userService.putUser(this.userForm.value).subscribe();
    this.edit = !this.edit;
    this.userForm.disable();
  }

}
