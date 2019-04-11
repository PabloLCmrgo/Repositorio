import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';




const routes: Routes = [
  { path: 'Profile',
    component: ProfileComponent
    },
   {
    path: 'TourDeHeroes',
    loadChildren: './TourDeheroes/TourDeheroes.module#TourDeheroesModule'},
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'Profile'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
