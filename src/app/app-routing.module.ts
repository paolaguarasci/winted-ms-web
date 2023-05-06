import { RouterModule, Routes } from '@angular/router';

import { Example1Component } from './example1/example1.component';
import { ExampleComponent } from './example/example.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { V1LayoutComponent } from './_layout/v1-layout/v1-layout.component';

const routes: Routes = [
  {
    path: '',
    component: V1LayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'ex', component: Example1Component },
    ],
  },
  { path: 'example1', component: Example1Component },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
