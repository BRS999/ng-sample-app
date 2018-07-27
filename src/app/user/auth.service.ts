import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser
  constructor() { }

  loginUser(userName: string, password: string): IUser {
    return this.currentUser = {
      id: 1,
      userName: 'jDoe',
      lastName: 'Doe',
      firstName: 'John'
    }
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
