import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Service/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string; 

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService 
    ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params =>{
      this.termino = params['termino']; //Termino es igual a lo que sea que venga en el termino
      this.heroes = this._heroesService.buscarHeroes( params ['termino'])
      console.log(this.heroes);
    });
  }

}
