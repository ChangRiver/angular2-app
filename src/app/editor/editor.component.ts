import { Component, OnInit } from '@angular/core';
import { Article, ArticlesService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(
    private articleService: ArticlesService,
    private router: Router
  ) { }

  article: Article = new Article();
  errors: Object = {};
  tagField: string;
  isSubmitting: boolean = false;

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    this.articleService.save(this.article)
      .subscribe(
        article => this.router.navigateByUrl('/article/' + article.slug),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      )
  }

  addTag() {

  }

  removeTag() {

  }

}
