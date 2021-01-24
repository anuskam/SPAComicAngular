import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../servicios/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics:Comic[] = [];

  constructor(private _servicio:ComicsService) {
    //función que retorna todo lo que tenemos en comics.service.ts
    this.comics = _servicio.getComics();
  }

  ngOnInit(): void {
  }


// hacer una funcion que corte el texto del caracter 0 al x y añadir ... para que me ponga un texto



}


