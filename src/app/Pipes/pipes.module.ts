import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LOCALE_ID  } from '@angular/core';

import { PipesComponent } from './pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// Rutas 
import { PipesRoutingModule } from './pipes-routing.module';


@NgModule({
  declarations: [
    PipesComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomseguroPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" },
    PipesRoutingModule
  ],
  bootstrap: []
})
export class PipesModule { }
