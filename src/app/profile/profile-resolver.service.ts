/**
 * Created by opop on 2016/11/11.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProfileService, Profile } from '../shared';

@Injectable()
export class ProfileResolver implements  Resolve<Profile> {
  constructor(
    private profileService: ProfileService,
    private router: Router
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.profileService.get(route.params['username'])
      .catch((err) => this.router.navigateByUrl('/'))
  }
}
