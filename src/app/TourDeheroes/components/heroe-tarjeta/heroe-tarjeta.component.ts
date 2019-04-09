import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Para utilizar Input se importa
/* Siempre que se importa Output se importa EventEmitter */  
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroes: any = {}; /* Input especifica que una propiedad que 
                              se quiere usar va a ser recibida desde afuera.
                              En este caso la propiedad heroe puede venir de fuera.   
                              */
  @Input() index: number;

  @Output () heroeSeleccionado: EventEmitter<number>;    /* La propiedad tiene el nombre del evento que el padre va a escuchar */ 
  
  constructor( private _router: Router ) { 
    this.heroeSeleccionado = new EventEmitter(); // Para inicializar EventEmitter
  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log( this.index );
    this._router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit(this.index); // Emite lo que te estoy indicando (Ejemplo Output)
  }
}
