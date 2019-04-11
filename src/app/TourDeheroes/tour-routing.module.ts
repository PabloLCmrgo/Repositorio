import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
//import { HeroeComponent } from './components/heroe/heroe.component';
//import { BuscadorComponent } from './components/buscador/buscador.component';
import { TourDeheroesComponent } from './TourDeheroes.component';
import { TourNavbarComponent } from './components/shared/navbar/navbar.component';
// import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';





const TourRoutes: Routes = [{
    path: '',
    component: TourDeheroesComponent,
    children: [
    {
    path: 'TourHome',
    component: HomeComponent
    },
    {
      path: 'TourHeroes',
      component: HeroesComponent
    },
    {
    path: 'TourAbout',
    component: AboutComponent
    },
    {
      path: '',
      redirectTo: 'TourHome',
      pathMatch: 'full',
    }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(TourRoutes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
