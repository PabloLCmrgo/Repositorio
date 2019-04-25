import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';

const PipesRoutes: Routes = [{
    path: '',
    component: PipesComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(PipesRoutes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
