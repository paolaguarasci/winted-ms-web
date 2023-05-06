import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  color: string = '#6466f1';

  colorRGB: any = { r: 100, g: 102, b: 241 };

  colorHSB: any = { h: 239, s: 59, b: 95 };
}
