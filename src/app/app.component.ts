import { Component } from '@angular/core';
import { ComicsService } from './servicios/comics.service';
import { Comic } from './servicios/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comics: Comic[] = [];
  searchText: string;
  title: 'spa3';

  constructor(private _servicio:ComicsService) {
    //función que retorna todo lo que tenemos en comics.service.ts
    this.comics = _servicio.getComics();
  }

}
