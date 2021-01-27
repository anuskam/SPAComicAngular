import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../../servicios/comics.service';
import { Comic } from '../../servicios/comics.service';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  //si me devuelve un solo comic [id] no puedo pasarle un array comics:Comic[] = [];
  comics:Comic;

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:ComicsService
  ) {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.comics = this._servicio.getComic(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
