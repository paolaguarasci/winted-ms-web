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
      this.redirectUrl = params.get("redirectUrl")
      console.log("REDIRECT 1", this.redirectUrl)

      if (this.redirectUrl === undefined || (this.redirectUrl !== undefined && this.redirectUrl === "")) {
        this.redirectUrl = "/"
      }

      this.isLoggedIn = this.authService.checkCredentials();
      let i = window.location.href.indexOf('code');
      if (!this.isLoggedIn && i != -1) {
        console.log("REDIRECT 2", this.redirectUrl)
        this.authService.retrieveToken(window.location.href.substring(i + 5), this.redirectUrl).subscribe((data) => {
          this.authService.saveToken(data);
          console.log("REDIRECT 2a", this.redirectUrl)
          window.location.href = this.redirectUrl ?? "https://localhost:4200/"
        });
      } else {
        console.log("REDIRECT 3", this.redirectUrl)
        this.login();
      }
    })

  }

  login() {
    window.location.href = this.authService.getServerLogin(this.redirectUrl);
  }
}
