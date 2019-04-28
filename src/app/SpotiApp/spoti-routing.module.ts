import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SpotiappComponent } from './spotiapp.component';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const SpotiRoutes: Routes = [{
    path: '',
    component: SpotiappComponent,
    children: [
        {
        path: 'Home',
        component: HomeComponent,
        },
        {
          path: 'Search',
          component: SearchComponent
        },
        {
        path: 'artista/:id',
        component: ArtistaComponent
        },
        {
          path: '',
          redirectTo: 'Home',
          pathMatch: 'full',
        }
        ],
      }];

@NgModule({
    imports: [RouterModule.forChild(SpotiRoutes)],
    exports: [RouterModule]
})
export class SpotiRoutingModule {}
