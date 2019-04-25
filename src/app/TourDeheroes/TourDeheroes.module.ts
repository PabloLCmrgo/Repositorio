import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Rutas
import { TourRoutingModule } from './tour-routing.module';


// Servicios
import { HeroesService } from './Service/heroes.service';


// Componentes
import { TourNavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { TourDeheroesComponent } from './TourDeheroes.component';





@NgModule({
  declarations: [
    TourNavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    TourDeheroesComponent
  ],
  imports: [
    TourRoutingModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: []
})
export class TourDeheroesModule { }
