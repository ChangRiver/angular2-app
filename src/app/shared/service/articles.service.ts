import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Article } from '../models';

@Injectable()
export class ArticlesService {

  constructor(
    private apiService: ApiService
  ) { }

  save(article): Observable<Article> {
    // if the article is exist
    if(article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .map(data => data.article);
    } else {
      return this.apiService.post('/articles/', {article: article})
        .map(data => data.article);
    }
  }

  get(slug):Observable<Article> {
    return this.apiService.get('/articles/' + slug)
      .map(data => data.article)
  }

}
