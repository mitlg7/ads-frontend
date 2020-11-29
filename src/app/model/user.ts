import {Role} from './role';

export class User{
  constructor(data: any) {
    this.username = data.username;
    this.email = data.email;
    this.role = data.role;
  }

  id: number;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  patronymic: string;
  avatar?: string;
  birthday: string;
  role: Role;

}
