import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = $localize`Winted | Vendi e acquista vestiti, scarpe e accessori`;

  color: string = '#6466f1';
  colorRGB: any = { r: 100, g: 102, b: 241 };
  colorHSB: any = { h: 239, s: 59, b: 95 };

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
