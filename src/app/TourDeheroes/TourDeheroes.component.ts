import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tour-deheroes-component',
    templateUrl: './TourDeheroes.component.html'
})
export class TourDeheroesComponent implements OnInit {
/*
  activeTab = 'search';

  search(activeTab){
    this.activeTab = activeTab;
  }

  result(activeTab){
    this.activeTab = activeTab;
  }
  */
 constructor(private _router: Router) { }

 ngOnInit() {
 }

 buscarHeroe( termino: string ){
   // console.log(termino);
   this._router.navigate( ['/buscar', termino] );
 }

}
