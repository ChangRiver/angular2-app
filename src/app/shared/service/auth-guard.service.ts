import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private userService: UserService
  ) {}

  canActivate(
    private route: RouterStateSnapshot,
    private state: ActivatedRouteSnapshot
  ): Observable<boolean> {

    return this.userService.isAuthenticated.take(1);
  }

}
