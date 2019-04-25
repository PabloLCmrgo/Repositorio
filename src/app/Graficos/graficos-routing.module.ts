import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficosComponent } from './graficos.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { LineaComponent } from './components/linea/linea.component';
import { RadarComponent } from './components/radar/radar.component';





const GraficosRoutes: Routes = [{
    path: '',
    component: GraficosComponent,
    children: [
    {
    path: 'Barra',
    component: BarraComponent
    },
    {
      path: 'Dona',
      component: DonaComponent
    },
    {
    path: 'Linea',
    component: LineaComponent
    },
    {
        path: 'Radar',
        component: RadarComponent
    },
    {
      path: '',
      redirectTo: 'Barra',
      pathMatch: 'full',
    }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(GraficosRoutes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
