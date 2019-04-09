import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

import { HomeComponent } from './TourDeheroes/components/home/home.component';





const routes: Routes = [
  { path: 'Profile',
    component: ProfileComponent
    },
    {
      path: 'TourDeHeroes',
      component: HomeComponent
   },
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
