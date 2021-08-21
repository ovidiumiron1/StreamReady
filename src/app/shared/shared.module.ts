import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectMenuComponent } from './components/connect-menu/connect-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MusicbarComponent } from './components/musicbar/musicbar.component';
import { SigninformComponent } from './components/signinform/signinform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollableDirective } from './components/slider/scrollable.directive';
import { UserDialogboxComponent } from './components/user-dialogbox/user-dialogbox.component';
import { UploadDialogboxComponent } from './components/upload-dialogbox/upload-dialogbox.component';
import { DropBoxComponent } from './components/upload-dialogbox/drop-box/drop-box.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TextFieldsComponent } from './components/upload-dialogbox/text-fields/text-fields.component';


@NgModule({
  declarations: [
    ConnectMenuComponent,
    FooterComponent,
    MusicbarComponent,
    SigninformComponent,
    SliderComponent,
    ScrollableDirective,
    MenuComponent,
    UserDialogboxComponent,
    UploadDialogboxComponent,
    DropBoxComponent,
    TextFieldsComponent
    ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbModule,
    NgxDropzoneModule
  ],
  exports: [
    ConnectMenuComponent,
    FooterComponent,
    SigninformComponent,
    MusicbarComponent,
    SliderComponent,
    MenuComponent,
    UserDialogboxComponent,
    UploadDialogboxComponent,
    DropBoxComponent,
    TextFieldsComponent,
    AppRoutingModule,
    ScrollableDirective,
    CommonModule
  ]
})
export class SharedModule { }
