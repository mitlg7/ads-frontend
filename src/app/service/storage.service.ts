import {Injectable} from '@angular/core';
import {User} from '../model/user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({providedIn: 'root'})
export class StorageService{

  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  clearStorage(): void {
    this.storage.clear();
  }
  getToken(): string {
    return this.storage.getItem(TOKEN_KEY);
  }
  getUser(): User {
    return JSON.parse(this.storage.getItem(USER_KEY));
  }
  saveToken(token: string): void {
    this.storage.setItem(TOKEN_KEY, token);
  }
  saveUser(user: User): void {
    this.storage.setItem(USER_KEY, JSON.stringify(user));
  }
}
