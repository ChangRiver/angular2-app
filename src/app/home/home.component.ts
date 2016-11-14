import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagsService, ArticleListConfig, UserService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private tagsService: TagsService,
    private userService: UserService,
    private router: Router
  ) {}

  tags: string[];
  isAuthenticated: boolean;
  listConfig: ArticleListConfig = new ArticleListConfig();
  tagsLoaded: boolean = false;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if(authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      }
    );

    this.tagsService.getAll()
      .subscribe(
        data => {
          this.tags = data;
          this.tagsLoaded = true;
        }
      )
  }

  setListTo(type: string = '', filters: Object = {}) {
    if(type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.listConfig = {type: type, filters: filters};
  }

}
