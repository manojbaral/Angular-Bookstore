import { Injectable } from '@angular/core';
import {AppConst} from "app/constants/app-const";
import {Http,Headers} from "@angular/http";
import {User} from '../models/User';
@Injectable()
export class UserService {
  private serverPath: string = AppConst.serverPath;

  constructor(private http: Http) {
  }

//  Creating New User
  newUser(username: string,
          email: string) {
    let url = this.serverPath + '/user/newUser';
    let userInfo = {
      "username": username,
      "email": email

    };

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,JSON.stringify(userInfo), {headers: tokenHeader});
  }

//  Update User Info
  updateUserInfo(user: User, newPassword: string, currentPassword: string) {
    let url = this.serverPath + '/user/updateUserInfo';
    let userInfo = {
      "id": user.id,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "username": user.username,
      "currentPassword": currentPassword,
      "email": user.email,
      "newPassword" : newPassword

    };

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.post(url,JSON.stringify(userInfo), {headers: tokenHeader});


  }


//  Retrieve Password
  retrievePassword(email: string) {
    let url = this.serverPath + '/user/forgetPassword';
    let userInfo = {
      "email": email

    };

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,JSON.stringify(userInfo), {headers: tokenHeader});

  }

  // Current User
  getCurrentUser() {
    let url = this.serverPath + '/user/getCurrentUser';

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: tokenHeader});

  }
}
