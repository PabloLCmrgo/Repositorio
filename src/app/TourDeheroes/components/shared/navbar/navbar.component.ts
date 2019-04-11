import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';  // Importar Router para poder navegar  


@Component({
  selector: 'tour-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class TourNavbarComponent implements OnInit {

  constructor() { }
  // private _router: Router
  ngOnInit() {
  }

  // buscarHeroe( termino: string ){
    // console.log(termino);
   // this._router.navigate( ['/buscar', termino] );
  //}

}
