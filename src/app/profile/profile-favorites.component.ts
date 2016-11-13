/**
 * Created by opop on 2016/11/13.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile, ArticleListConfig } from '../shared';

@Component({
  selector: 'profile-favorites',
  templateUrl: './profile-favorites.component.html'
})

export class ProfileFavoritesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  articlesConfig: ArticleListConfig = new ArticleListConfig();

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.articlesConfig.filters.favorited = this.profile.username;
      }
    )
  }
}
