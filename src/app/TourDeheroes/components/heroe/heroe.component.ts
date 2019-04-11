import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Service/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{

  heroe: any = {};

  constructor( private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
    ) {

    this._activatedRoute.params.subscribe( params =>{
    // la prop. params regresa una promesa, es algo que está pendiente de esos cambios.
    this.heroe = this._heroesService.getHeroe( params['idx'] );
    });
  }


}
