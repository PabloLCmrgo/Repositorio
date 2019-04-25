import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipes.component.html'
})
export class PipesComponent {

  nombre = "Fernando";
  nombre2 = "fernAndo alberto heRRera jimenez";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise(  ( resolve, reject )=>{

    setTimeout( ()=>resolve('LLego la data!'), 3500 );

  });

  fecha = new Date();

  video = "mOeSfOJrUIk";

  activar:boolean = true;

};
