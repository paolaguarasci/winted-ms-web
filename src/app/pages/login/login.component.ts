import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean;
  redirectUrl!: string | null;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.redirectUrl = params.get('redirectUrl');
      let code = params.get('code');
      if (
        this.redirectUrl === undefined ||
        (this.redirectUrl !== undefined && this.redirectUrl === '')
      ) {
        this.redirectUrl = '/';
      }
      this.isLoggedIn = this.authService.checkCredentials();
      let i = window.location.href.indexOf('code');
      if (!this.isLoggedIn && i != -1) {
        this.authService
          .retrieveToken(
            code,
            this.redirectUrl
          )
          .subscribe((data) => {
            this.authService.saveToken(data);
            if (this.redirectUrl === "" || this.redirectUrl === null || this.redirectUrl === "/") {
              this.redirectUrl = 'https://localhost:4200/';
            }
            window.location.href = this.redirectUrl;
          });
      } else {
        this.login();
      }
    });

    // this.redirectUrl = 'https://localhost:4200/';
    // this.isLoggedIn = this.authService.checkCredentials();
    // let i = window.location.href.indexOf('code');
    // if (!this.isLoggedIn && i != -1) {
    //   this.authService
    //     .retrieveToken(window.location.href.substring(i + 5), this.redirectUrl)
    //     .subscribe((data) => {
    //       this.authService.saveToken(data);
    //       window.location.href = this.redirectUrl ?? 'https://localhost:4200/';
    //     });
    // } else {
    //   this.login();
    // }
  }

  login() {
    window.location.href = this.authService.getServerLogin(this.redirectUrl);
  }
}
