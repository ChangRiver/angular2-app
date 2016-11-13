/**
 * Created by opop on 2016/11/13.
 */
import { Injectable } from '@angular/core';
import { ArticlesService, Article } from '../shared';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleResolver implements Resolve<Article> {

  constructor(
    private articleService: ArticlesService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.articleService.get(route.params['slug'])
      .catch(err => this.router.navigateByUrl('/'));
  }
}
