import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NavigationEnd, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArmadioEvidenzaComponent } from './components/armadio-evidenza/armadio-evidenza.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BuyBrandsComponent } from './components/buy-brands/buy-brands.component';
import { BuyBrandsSingleBrandsComponent } from './components/buy-brands-single-brands/buy-brands-single-brands.component';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FeedComponent } from './components/feed/feed.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleriaModule } from 'primeng/galleria';
import { HeroComponent } from './components/hero/hero.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ImageModule } from 'primeng/image';
import { InboxComponent } from './pages/inbox/inbox.component';
import { InboxConversationItemComponent } from './components/inbox-conversation-item/inbox-conversation-item.component';
import { InboxPreviewItemComponent } from './components/inbox-preview-item/inbox-preview-item.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoginComponent } from './pages/login/login.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NotificheComponent } from './pages/notifiche/notifiche.component';
import { NotificheDropDownComponent } from './components/notifiche-drop-down/notifiche-drop-down.component';
import { NotificheSingleRowComponent } from './components/notifiche-single-row/notifiche-single-row.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileReviewListComponent } from './components/profile-review-list/profile-review-list.component';
import { ProfileReviewSingleComponent } from './components/profile-review-single/profile-review-single.component';
import { ProfileWardrobeComponent } from './components/profile-wardrobe/profile-wardrobe.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RecearchSuggestedComponent } from './components/recearch-suggested/recearch-suggested.component';
import { RecearchSuggestedSingleComponent } from './components/recearch-suggested-single/recearch-suggested-single.component';
import { RxStompService } from './services/rxstomp.service';
import { SearchComponent } from './pages/search/search.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { V1FooterComponent } from './_layout/v1-footer/v1-footer.component';
import { V1FooterLightComponent } from './_layout/v1-footer-light/v1-footer-light.component';
import { V1FooterLine1Component } from './_layout/v1-footer-line1/v1-footer-line1.component';
import { V1FooterLine2Component } from './_layout/v1-footer-line2/v1-footer-line2.component';
import { V1FooterLine3Component } from './_layout/v1-footer-line3/v1-footer-line3.component';
import { V1HeaderBar1Component } from './_layout/v1-header-bar1/v1-header-bar1.component';
import { V1HeaderBar2Component } from './_layout/v1-header-bar2/v1-header-bar2.component';
import { V1HeaderComponent } from './_layout/v1-header/v1-header.component';
import { V1LayoutComponent } from './_layout/v1-layout/v1-layout.component';
import { V2FooterLightComponent } from './_layout/v2-footer-light/v2-footer-light.component';
import { V2LayoutComponent } from './_layout/v2-layout/v2-layout.component';
import { V3LayoutComponent } from './_layout/v3-layout/v3-layout.component';
import { VulnComponent } from './pages/vuln/vuln.component';
import { filter } from 'rxjs/operators';
import { rxStompServiceFactory } from './services/rx-stomp-service-factory';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'winted',
        url: 'https://localhost:8000',
        clientId: 'winted-web'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
    V1HeaderComponent,
    V1FooterComponent,
    V1LayoutComponent,
    V1HeaderBar1Component,
    V1HeaderBar2Component,
    V1FooterLine1Component,
    V1FooterLine2Component,
    V1FooterLine3Component,
    ModalLoginComponent,
    HomepageComponent,
    ProductCardComponent,
    ArmadioEvidenzaComponent,
    MostWantedComponent,
    BuyBrandsComponent,
    RecearchSuggestedComponent,
    FeedComponent,
    HeroComponent,
    BuyBrandsSingleBrandsComponent,
    RecearchSuggestedSingleComponent,
    InboxComponent,
    InboxPreviewItemComponent,
    InboxConversationItemComponent,
    NewProductComponent,
    V1FooterLightComponent,
    V2FooterLightComponent,
    V2LayoutComponent,
    V3LayoutComponent,
    ProductDetailsComponent,
    ProductGalleryComponent,
    ProfileComponent,
    CheckoutComponent,
    ProfileWardrobeComponent,
    ProfileReviewListComponent,
    ProfileReviewSingleComponent,
    NotificheDropDownComponent,
    NotificheComponent,
    NotificheSingleRowComponent,
    SearchComponent,
    PreferitiComponent,
    LoginComponent,
    VulnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    TabViewModule,
    ColorPickerModule,
    MegaMenuModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    ToastModule,
    ToolbarModule,
    MenubarModule,
    SplitButtonModule,
    DialogModule,
    ImageModule,
    SplitterModule,
    FileUploadModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextareaModule,
    GalleriaModule,
    DividerModule,
    RatingModule,
    FontAwesomeModule,
    ConfirmPopupModule,
    CarouselModule,
    KeycloakAngularModule
  ],
  providers: [    
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // },
  {
    provide: RxStompService,
    useFactory: rxStompServiceFactory,
  },

  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }

],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      console.log(event['url']);
      console.log(event['urlAfterRedirects']);
    });
  }
}
