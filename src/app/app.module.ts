import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdCardComponent } from './ad-card/ad-card.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdPageComponent } from './ad-page/ad-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'search', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'ad/:id', component: AdPageComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'create', component: CreateAdComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdCardComponent,
    UserPageComponent,
    AdPageComponent,
    HomeComponent,
    NotFoundComponent,
    CreateAdComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
