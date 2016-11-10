import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authType: string;
  title: string = '';
  credentials: Object = {};
  isSubmitting: boolean = false;
  errors: Object = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(
      data => {
        this.authType = data[data.length -1].path;
        this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      }
    );

  }

  submitForm() {
    this.isSubmitting = true;

    this.userService.attemptAuth(this.authType, this.credentials)
      .subscribe(
        userData => {
          this.router.navigateByUrl('/')
        },
        err => {
          this.isSubmitting = false;
          this.errors = err;
        }
      )
  }

}
