import { Badge, BadgeModule } from 'primeng/badge';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { Example1Component } from './example1/example1.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { V1FooterComponent } from './_layout/v1-footer/v1-footer.component';
import { V1FooterLine1Component } from './_layout/v1-footer-line1/v1-footer-line1.component';
import { V1FooterLine2Component } from './_layout/v1-footer-line2/v1-footer-line2.component';
import { V1FooterLine3Component } from './_layout/v1-footer-line3/v1-footer-line3.component';
import { V1HeaderBar1Component } from './_layout/v1-header-bar1/v1-header-bar1.component';
import { V1HeaderBar2Component } from './_layout/v1-header-bar2/v1-header-bar2.component';
import { V1HeaderComponent } from './_layout/v1-header/v1-header.component';
import { V1LayoutComponent } from './_layout/v1-layout/v1-layout.component';
import { V1ModalLoginComponent } from './_layout/v1-modal-login/v1-modal-login.component';

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
    V1ModalLoginComponent
  ],
  imports: [
    BrowserModule,
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
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
