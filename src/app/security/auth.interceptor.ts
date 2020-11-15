import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {Observable} from 'rxjs';

const AUTHORIZATION_HEADER_NAME = 'Authorization';
const TOKEN_PREFIX = 'Bearer ';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.storageService.getToken();
    if (token != null) {
      authReq = req.clone(
        {headers: req.headers.append(AUTHORIZATION_HEADER_NAME, TOKEN_PREFIX + token)});
    }
    return next.handle(authReq);
  }
}
