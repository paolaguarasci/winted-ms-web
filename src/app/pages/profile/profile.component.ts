import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() username!: any;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.username = params.get('username')
    })
  }

}
