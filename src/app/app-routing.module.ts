import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { StreamPageComponent } from './pages/stream-page/stream-page.component';

const routes: Routes = [
  {
    path:'',
     component: HomePageComponent
  },
  {
    path:'music-page',
     component: MusicPageComponent
  },
  {
    path:'stream-page',
    component: StreamPageComponent
  },
  {
    path:'library-page',
    component: LibraryPageComponent
  },
  {
    path:'playlist-page',
    component: PlaylistPageComponent
  },
  {
    path:'settings-page',
    component: SettingsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
