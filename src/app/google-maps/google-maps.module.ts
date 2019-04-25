import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapsComponent } from './google-maps.component';
import { MaterialModule } from './material.module';

import { MapaComponent } from './mapa/mapa.component';
import { MapaEditarComponent } from './mapa-editar/mapa-editar.component';





import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    GoogleMapsComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [

    CommonModule,
   // BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAKDWsjaN2CSs13Zm0A--Qmv3OOfeeQlOs'
    })
  ],
  providers: [],
  bootstrap: []
})
export class GoogleMapsModule { }
