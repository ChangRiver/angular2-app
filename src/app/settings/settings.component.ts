import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User = new User();
  errors: Object = {};
  isSubmitting: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
  }

  submitForm() {
    this.isSubmitting = true;
    this.userService.update(this.user)
      .subscribe(
        data => { return data },
        err  => {
          this.errors = err;
          this.isSubmitting = false;
        }
      )
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
