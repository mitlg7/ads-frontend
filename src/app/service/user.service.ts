import {Observable} from 'rxjs';

export interface User{
  id: number;
  username: string;
}

export class UserService{

  getUserById(id: string): Observable<User>{
    return null;
  }
}
