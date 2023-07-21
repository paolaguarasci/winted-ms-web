import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // isLoggedIn!: boolean;
  // redirectUrl!: string | null;

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly keycloak: KeycloakService
  ) {}

  async ngOnInit() {
    // this.route.queryParamMap.subscribe((params) => {
    //   this.redirectUrl = params.get('redirectUrl');
    //   let code = params.get('code');
    //   if (
    //     this.redirectUrl === undefined ||
    //     (this.redirectUrl !== undefined && this.redirectUrl === '')
    //   ) {
    //     this.redirectUrl = '/';
    //   }
    //   this.isLoggedIn = this.authService.checkCredentials();
    //   let i = window.location.href.indexOf('code');
    //   if (!this.isLoggedIn && i != -1) {
    //     this.authService
    //       .retrieveToken(
    //         code,
    //         this.redirectUrl
    //       )
    //       .subscribe((data) => {
    //         this.authService.saveToken(data);
    //         if (this.redirectUrl === "" || this.redirectUrl === null || this.redirectUrl === "/") {
    //           this.redirectUrl = 'https://localhost:4200/';
    //         }
    //         window.location.href = this.redirectUrl;
    //       });
    //   } else {
    //     this.login();
    //   }
    // });

    // this.redirectUrl = 'https://localhost:4200/';
    // this.isLoggedIn = this.authService.checkCredentials();
    // let i = window.location.href.indexOf('code');
    // if (!this.isLoggedIn && i != -1) {
    //   this.authService
    //     .retrieveToken(window.location.href.substring(i + 5), this.redirectUrl)
    //     .subscribe((data) => {
    //       this.authService.saveToken(data);
    //       // window.location.href = this.redirectUrl ?? 'https://localhost:4200/';
    //       window.location.href = 'https://localhost:4200';
    //     });
    // } else {
    //   this.login();
    // }


    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }

    const params = new URLSearchParams(window.location.hash.substring(1));
    console.log("PARAMS", params);
    if (params.has('code')) {
        const parsedCode: any = params.get('code')?.split('.');
        // const userSessionId = prompt(`Current User Session ID is:\n${parsedCode[1]}\nUser Session ID to hijack (leave empty to do not override):`);
        console.log("parsedCode", parsedCode)
        // if (userSessionId) {
        //     parsedCode[1] = userSessionId;
        //     params.set('code', parsedCode?.join('.'));
        //     params.set('sessionIdAdjusted', 'true');
        //     window.location.hash = `#${params.toString()}`;
        // }
    }


  }

  login() {
    // window.location.href = this.authService.getServerLogin(this.redirectUrl);
    this.keycloak.login();
  }
}
