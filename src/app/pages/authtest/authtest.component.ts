import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authtest',
  templateUrl: './authtest.component.html',
  styleUrls: ['./authtest.component.scss'],
})
export class AuthtestComponent {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.checkCredentials();
    let i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i != -1) {
      this.authService.retrieveToken(window.location.href.substring(i + 5));
    }
  }

  login() {
    debugger
    window.location.href = this.authService.getServerLogin();
  }

  logout() {
    this.authService.logout();
  }
}
// http://localhost:8000/auth/realms/winted/protocol/openid-connect/auth?
// response_type=code&
// client_id=winted-web&
// redirect_uri=https://localhost:4200/test"
