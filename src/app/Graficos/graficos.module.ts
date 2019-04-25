import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { GraficosComponent } from './graficos.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { LineaComponent } from './components/linea/linea.component';
import { RadarComponent } from './components/radar/radar.component';

// Rutas
import { GraficosRoutingModule } from './graficos-routing.module';



@NgModule({
  declarations: [
    GraficosComponent,
    BarraComponent,
    DonaComponent,
    LineaComponent,
    RadarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GraficosRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [

  ],
})
export class GraficosModule { }
