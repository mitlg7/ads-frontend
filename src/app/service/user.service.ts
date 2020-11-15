import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

const  API_URL = environment.apiUrl;

export class UserService{

  getUserById(id: string): Observable<User>{
    return null;
  }
  getAllUsers(): Observable<User[]>{
    return null;
  }

}
