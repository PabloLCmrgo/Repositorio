import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router para poder navegar  


@Component({
// tslint:disable-next-line: component-selector
  selector: 'tour-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ){
    // console.log(termino);
    this._router.navigate( ['/buscar',termino] );
  }

}
