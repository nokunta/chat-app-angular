import { Injectable } from '@angular/core';
import { User } from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User;

  constructor() { }

  addUser(user: User){
    this.user.firstname = user.firstname;
  }
}
