import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArmadioEvidenzaComponent } from './components/armadio-evidenza/armadio-evidenza.component';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BuyBrandsComponent } from './components/buy-brands/buy-brands.component';
import { BuyBrandsSingleBrandsComponent } from './components/buy-brands-single-brands/buy-brands-single-brands.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { Example1Component } from './pages/example1/example1.component';
import { ExampleComponent } from './pages/example/example.component';
import { FeedComponent } from './components/feed/feed.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { HeroComponent } from './components/hero/hero.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { InboxComponent } from './pages/inbox/inbox.component';
import { InboxConversationItemComponent } from './components/inbox-conversation-item/inbox-conversation-item.component';
import { InboxPreviewItemComponent } from './components/inbox-preview-item/inbox-preview-item.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { RecearchSuggestedComponent } from './components/recearch-suggested/recearch-suggested.component';
import { RecearchSuggestedSingleComponent } from './components/recearch-suggested-single/recearch-suggested-single.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
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
import { V1ModalLoginComponent } from './_layout/v1-modal-login/v1-modal-login.component';
import { V2FooterLightComponent } from './_layout/v2-footer-light/v2-footer-light.component';
import { V2LayoutComponent } from './_layout/v2-layout/v2-layout.component';
import { V3LayoutComponent } from './_layout/v3-layout/v3-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    V1HeaderComponent,
    V1FooterComponent,
    V1LayoutComponent,
    Example1Component,
    V1HeaderBar1Component,
    V1HeaderBar2Component,
    V1FooterLine1Component,
    V1FooterLine2Component,
    V1FooterLine3Component,
    V1ModalLoginComponent,
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
