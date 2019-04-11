import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../Service/heroes.service';
import { Router } from '@angular/router';   // Router es un servicio


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,   // Para poder usar el servicio
              private _router: Router                  // Para poder usar el servicio
    ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    //  console.log(this.heroes);
  }

  verHeroe(idx: number){       // idx es i de índice
  this._router.navigate( ['heroe', idx] );   // router es para jalar en servicio en el cual se navega y dirige
  }                                          // hacia el componente designado.

}
