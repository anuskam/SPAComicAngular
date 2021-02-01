import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../../servicios/comics.service';
import { Fantasia } from '../../servicios/comics.service';

@Component({
  selector: 'app-fantasia',
  templateUrl: './fantasia.component.html',
  styleUrls: ['./fantasia.component.css']
})
export class FantasiaComponent implements OnInit {

  fantasias:Fantasia;

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:ComicsService
  ) {
    this.ruta.params.subscribe(params=>{
     console.log(params['id']);
     this.fantasias = this._servicio.getFantasia(params['id']);
   })
  }

  ngOnInit(): void {
  }

}
