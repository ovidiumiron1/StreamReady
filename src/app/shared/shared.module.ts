import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectMenuComponent } from './components/connect-menu/connect-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MusicbarComponent } from './components/musicbar/musicbar.component';
import { SigninformComponent } from './components/signinform/signinform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ConnectMenuComponent,
    FooterComponent,
    MusicbarComponent,
    SigninformComponent
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
    AppRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
