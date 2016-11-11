/**
 * Created by suboat on 16-11-9.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service';
import { User } from '../models';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  constructor(private userService: UserService){}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      data => this.currentUser = data
    )
  }
}
