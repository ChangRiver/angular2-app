/**
 * Created by opop on 2016/11/13.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../models';
import { ArticlesService, UserService } from '../service';

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html'
})

export class FavoriteButtonComponent {

  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,
    private router: Router
  ) {}

  @Input() article;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting: boolean;
  isUser: boolean;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        if(!authenticated) {
          this.router.navigateByUrl('/login');
          return;
        }
      }
    )

    if(this.article.favorited) {
      this.articlesService.unfavorite(this.article.slug)
        .subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(false);
            this.article.favoritesCount--;
          },
          err => this.isSubmitting = false
        )
    } else {
      this.articlesService.favorite(this.article.slug)
        .subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(true);
            this.article.favoritesCount++;
          },
          err => this.isSubmitting = false
        )
    }

  }
}

