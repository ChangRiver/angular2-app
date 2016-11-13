import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { FollowButtonComponent, FavoriteButtonComponent } from './buttons';

import {
  ArticleMetaComponent,
  ArticleListComponent,
  ArticlePreviewComponent
} from './article-helpers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    FavoriteButtonComponent,
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    FavoriteButtonComponent,
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ]
})

export class SharedModule {

}

