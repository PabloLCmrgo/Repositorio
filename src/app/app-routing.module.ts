import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { PipesComponent } from './Pipes/pipes.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';


const routes: Routes = [
  { path: 'Profile',
    component: ProfileComponent
    },
    { path: 'not-found',
    component: ErrorComponent
    },
   {
    path: 'TourDeHeroes',
    loadChildren: './TourDeheroes/TourDeheroes.module#TourDeheroesModule'
  },
  {
    path: 'SpotiApp',
    loadChildren: './SpotiApp/Spotiapp.module#SpotiAppModule'
  },
  {
    path: 'AuthApp',
    loadChildren: './Authapp/auth.module#AuthModule'
  },
  {
    path: 'Pipes',
    component: PipesComponent
  },
  {
    path: 'GoogleMaps',
    component: GoogleMapsComponent
  },
  {
    path: 'Graficos',
    loadChildren: './Graficos/graficos.module#GraficosModule'
  },
  {
    path: 'CRUDconAPIREST',
    loadChildren: './Crud-Con-APIREST/CRUDconAPIREST.module#CRUDConAPIRESTModule'
  },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
