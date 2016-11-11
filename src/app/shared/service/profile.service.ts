import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Profile } from '../models';

@Injectable()
export class ProfileService {

  constructor(
    private apiService: ApiService
  ) { }

  get(username: string): Observable<Profile> {
    return this.apiService.get('/profiles/' + username)
      .map((data: {profile: Profile}) => data.profile);
  }

}
