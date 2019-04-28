import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { PipesComponent } from './Pipes/pipes.component';

// Pipes
import { CapitalizadoPipe } from './Pipes/pipes/capitalizado.pipe';
import { ContrasenaPipe } from './Pipes/pipes/contrasena.pipe';
import { DomseguroPipe } from './Pipes/pipes/domseguro.pipe';

// Google maps
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MapaComponent } from './google-maps/mapa/mapa.component';
import { Marcador } from './google-maps/marcador.class';
import { MapaEditarComponent } from './google-maps/mapa-editar/mapa-editar.component';
import { MaterialModule } from './google-maps/material.module';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ErrorComponent,
      PipesComponent,
      CapitalizadoPipe,
      ContrasenaPipe,
      DomseguroPipe,
        GoogleMapsComponent,
        MapaComponent,
        MapaEditarComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKDWsjaN2CSs13Zm0A--Qmv3OOfeeQlOs'
      }),
  ],
  providers: [Marcador],
  bootstrap: [AppComponent]
})
export class AppModule { }
