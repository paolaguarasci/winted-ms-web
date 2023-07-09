import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-vuln',
  templateUrl: './vuln.component.html',
  styleUrls: ['./vuln.component.scss'],
})
export class VulnComponent implements OnInit {
  redirectUrl!: any;
  flag!: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flag = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    this.route.queryParamMap.subscribe((params) => {
      this.redirectUrl = params.get('redirectUrl');
      console.log("VULN REDIRECT: ", this.redirectUrl)
      window.location.href = this.redirectUrl;
      // this.authService.logout();
    });
    console.log(this.flag)
  }

  randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
}
