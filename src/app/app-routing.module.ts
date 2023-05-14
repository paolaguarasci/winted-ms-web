import { RouterModule, Routes } from '@angular/router';

import { Example1Component } from './pages/example1/example1.component';
import { ExampleComponent } from './pages/example/example.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NgModule } from '@angular/core';
import { V1LayoutComponent } from './_layout/v1-layout/v1-layout.component';

const routes: Routes = [
  {
    path: '',
    component: V1LayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: InboxComponent },
    ],
  },
  { path: 'sell', component: NewProductComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
