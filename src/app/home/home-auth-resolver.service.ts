/**
 * Created by suboat on 16-11-14.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../shared';


@Injectable()
export class HomeAuthResolver  implements Resolve<boolean>{
  constructor(private userService: UserService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.userService.isAuthenticated.take(1);
  }
}
