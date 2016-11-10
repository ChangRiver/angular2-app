import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models';

@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>(new User());
  public  currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private http: Http
  ) { }

  // 保存用户的Token
  setAuth(user: User) {
    // save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // set isAuthenticated to true
    this.currentUserSubject.next(user);

    this.isAuthenticatedSubject.next(true);
  }

  // 删除用户的Token
  purgeAuth() {
    this.jwtService.destroyToken();
    // set current user to an empty object
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type: string, credentials): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
  }

  populate() {
    if(this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        )
    } else {
      this.purgeAuth()
    }
  }

  update(user): Observable<User> {
    return this.apiService.put('/user', {user})
      .map(
        data => {
          this.currentUserSubject.next(data.user);
          return data.user;
        }
      )
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

}
