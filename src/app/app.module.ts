import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicPageComponent } from './pages/music-page/music-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MusicPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
