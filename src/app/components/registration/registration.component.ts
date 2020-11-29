import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../service/auth.service';
import {User} from '../../model/user';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formRegistration: FormGroup;
  public errorMessage: '';
  public errorFlag = false;
  constructor(public fb: FormBuilder,
              private http: HttpClient,
              private titleService: Title,
              private authService: AuthService,
              private storageService: StorageService,
              private router: Router
  ) {
    this.formRegistration = this.fb.group({
      username: [``],
      password: [``],
      email: [``],
      firstName: [``],
      secondName: [``],
      patronymic: [``],
      birthday: [``],
      avatar: [``],
      phone: [``]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Регистрация');
  }

  registration(): void {
   this.authService.register(this.formRegistration).subscribe(response => {
        this.storageService.saveToken(response.token);
        this.storageService.saveUser(new User(response));
        this.router.navigate(['/']);
      },
      (error) =>  {
     this.errorFlag = true;
     this.errorMessage = error.error;
      }
  );
  }
}
