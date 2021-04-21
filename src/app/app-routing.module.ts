import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';

const routes: Routes = [
  {
    path:'',
     component: HomePageComponent
  },
  {
    path:'music-page',
     component: MusicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
