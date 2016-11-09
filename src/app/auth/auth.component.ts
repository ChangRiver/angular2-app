import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router
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
    console.log(this.credentials);
  }

}
