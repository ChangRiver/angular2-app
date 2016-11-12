/**
 * Created by opop on 2016/11/13.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Article, ArticlesService, UserService } from '../shared';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EditableArticleResolver implements Resolve<Article>{

  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.articlesService.get(route.params['slug'])
      .map(
        article => {
          if(this.userService.getCurrentUser().username === article.author.username) {
            return article;
          } else {
            this.router.navigateByUrl('/');
          }
        }
      )
      .catch((err) => this.router.navigateByUrl('/'));
  }
}
