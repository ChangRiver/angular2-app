/**
 * Created by opop on 2016/11/11.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, ProfileService } from '../service';
import { Profile } from '../models';

@Component({
  selector: 'follow-button',
  templateUrl: './follow-button.component.html'
})

export class FollowButtonComponent {

  constructor(
    private userService: UserService,
    private prifileService: ProfileService,
    private router: Router
  ){}

  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting: boolean;

  toggleFollow() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if(!isAuthenticated) {
          this.router.navigateByUrl('/register');
          return;
        }
      }
    );

    if(this.profile.following) {
      this.prifileService.unfollow(this.profile.username)
        .subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(false);
          },
          err => this.isSubmitting = false
        )
    } else {
      this.prifileService.follow(this.profile.username)
        .subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(true);
          },
          err => this.isSubmitting = false
        )
    }
  }

}
