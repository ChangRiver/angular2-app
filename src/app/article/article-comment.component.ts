/**
 * Created by opop on 2016/11/13.
 */
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { User, UserService, Comment } from '../shared';

@Component({
  selector: 'article-comment',
  templateUrl: './article-comment.component.html'
})

export class ArticleCommentComponent implements OnInit{

  constructor(
    private userService: UserService
  ){}

  @Input() comment: Comment;
  @Output() deleteCommnet = new EventEmitter<boolean>();
  canModify: boolean;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    )
  }

  deleteClicked() {
    this.deleteCommnet.emit(true);
  }

}
