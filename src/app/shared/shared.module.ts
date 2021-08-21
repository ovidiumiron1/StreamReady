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
import { LibraryMenuComponent } from '../pages/library-page/library-menu/library-menu.component';
import { LibraryMenuBoxComponent } from '../pages/library-page/library-menu/library-menu-box/library-menu-box.component';


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
    LibraryMenuComponent,
    LibraryMenuBoxComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    ConnectMenuComponent,
    FooterComponent,
    SigninformComponent,
    MusicbarComponent,
    SliderComponent,
    MenuComponent,
    UserDialogboxComponent,
    LibraryMenuComponent,
    LibraryMenuBoxComponent,
    AppRoutingModule,
    ScrollableDirective,
    CommonModule
  ]
})
export class SharedModule { }
