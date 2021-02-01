import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../servicios/comics.service';
import { Fantasia } from '../../servicios/comics.service';

@Component({
  selector: 'app-fantasias',
  templateUrl: './fantasias.component.html',
  styleUrls: ['./fantasias.component.css']
})
export class FantasiasComponent implements OnInit {

  fantasias:Fantasia[] = [];

  constructor(private _servicio:ComicsService) {
    this.fantasias = _servicio.getFantasias();
   }

  ngOnInit(): void {
  }

}
