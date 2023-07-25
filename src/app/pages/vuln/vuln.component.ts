import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vuln',
  templateUrl: './vuln.component.html',
  styleUrls: ['./vuln.component.scss'],
})
export class VulnComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      let url = params.get("url")
      this.route.fragment.subscribe((fragments) => {
        if( url != undefined) {
          url += "?" + fragments
          console.log(url)
          this.http.get(url).subscribe((res) => console.log(res))
        }
      });
    })
  }
}
