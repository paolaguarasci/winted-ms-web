import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { V1LayoutComponent } from './_layout/v1-layout/v1-layout.component';
import { V2LayoutComponent } from './_layout/v2-layout/v2-layout.component';
import { V3LayoutComponent } from './_layout/v3-layout/v3-layout.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SearchComponent } from './pages/search/search.component';
import { canactivateGuard } from './guards/canactivate.guard';
import { NotificheComponent } from './pages/notifiche/notifiche.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [
  {
    path: '',
    component: V1LayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'search', component: SearchComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'notifiche', component: NotificheComponent, canActivate: [canactivateGuard] },
      { path: 'preferiti', component: PreferitiComponent, canActivate: [canactivateGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [canactivateGuard] },
    ],
  },
  {
    path: '',
    component: V2LayoutComponent,
    children: [
      { path: 'inbox', component: InboxComponent, canActivate: [canactivateGuard] },
      { path: 'inbox/:id', component: InboxComponent, canActivate: [canactivateGuard] },
    ],
  },
  {
    path: '',
    component: V3LayoutComponent,
    children: [
      { path: 'sell', component: NewProductComponent, canActivate: [canactivateGuard] },
      { path: 'product/:id', component: ProductDetailsComponent },
    ],
  },
  { path: 'sell', component: NewProductComponent, canActivate: [canactivateGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
