import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { StreamPageComponent } from './pages/stream-page/stream-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MusicPageComponent,
    StreamPageComponent,
    LibraryPageComponent,
    PlaylistPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    NgxDropzoneModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
