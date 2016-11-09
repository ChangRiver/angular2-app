import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models';

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  attemptAuth(type: string, credentials): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .map(
        data => {
          return data;
        }
      )
  }

}
