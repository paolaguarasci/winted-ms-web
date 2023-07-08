import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlSegment } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  isLoggedIn!: boolean;
  redirectUrl!: UrlSegment[];
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // this.isLoggedIn = this.authService.checkCredentials();
    // let i = window.location.href.indexOf('code');
    // if (!this.isLoggedIn && i != -1) {
    //   console.log("modale")
    //   this.authService.retrieveToken(window.location.href.substring(i + 5), "");
    // }
  }
  login() {
    this.route.url.subscribe((res) => {
      this.close.emit("");
      this.router.navigate(['login'], { queryParams: { redirectUrl: window.location.href} })
    });
  }
}
