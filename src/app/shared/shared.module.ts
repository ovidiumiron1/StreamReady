import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectMenuComponent } from './components/connect-menu/connect-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ConnectMenuComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    ConnectMenuComponent,
    FooterComponent,
    AppRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
