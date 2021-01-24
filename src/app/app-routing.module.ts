import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '***', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
