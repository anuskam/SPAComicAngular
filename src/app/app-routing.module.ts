import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comic', component: ComicComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '***', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
