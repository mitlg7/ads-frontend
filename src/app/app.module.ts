import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AdPageComponent } from './components/ad-page/ad-page.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import {AuthInterceptor} from './security/auth.interceptor';
import { UserAdsComponent } from './components/user-ads/user-ads.component';
import { UserResponseComponent } from './components/user-response/user-response.component';

import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'search', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'ad/:id', component: AdPageComponent},
  {path: 'user/response', component: UserResponseComponent},
  {path: 'user/:username', component: UserPageComponent},
  {path: 'user/:username/ads', component: UserAdsComponent},
  {path: 'create', component: CreateAdComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AdCardComponent,
    UserPageComponent,
    AdPageComponent,
    HomeComponent,
    NotFoundComponent,
    CreateAdComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    UserAdsComponent,
    UserResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
