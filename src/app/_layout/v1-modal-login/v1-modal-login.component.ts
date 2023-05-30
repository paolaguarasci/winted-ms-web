import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-v1-modal-login',
  templateUrl: './v1-modal-login.component.html',
  styleUrls: ['./v1-modal-login.component.scss']
})
export class V1ModalLoginComponent implements OnInit {
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
    window.location.href = this.authService.getServerLogin();
  }

  logout() {
    this.authService.logout();
  }
}
