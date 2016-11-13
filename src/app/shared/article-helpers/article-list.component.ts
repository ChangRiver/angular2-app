/**
 * Created by opop on 2016/11/13.
 */
import { Component, Input } from '@angular/core';
import { Article, ArticleListConfig } from '../models';
import { ArticlesService } from '../service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html'
})

export class ArticleListComponent {

  constructor(
    private articlesService: ArticlesService
  ){}

  query: ArticleListConfig;
  results: Article[];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: Array<number> = [1];

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if(config) {
      this.query = config;
      this.currentPage = 1;
    }
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    if(this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = ((this.currentPage - 1) * this.limit)
    }

    this.articlesService.query(this.query)
      .subscribe(
        data => {
          this.loading = false;
          this.results = data.articles;

          this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)),(val,index)=>index+1);

        }
      )

  }
}
