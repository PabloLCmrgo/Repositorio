import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { SpotiRoutingModule } from './spoti-routing.module';


// Servicios
import { SpotifyService } from './services/spotify.service';


// Pipes
import { DomseguroPipe } from './components/pipes/domseguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipes';

// Componenetes
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { SpotiappComponent } from './spotiapp.component';




@NgModule({
    declarations: [
        DomseguroPipe,
        NoimagePipe,
        ArtistaComponent,
        HomeComponent,
        SearchComponent,
        LoadingComponent,
        TarjetasComponent,
        SpotiappComponent
    ],
    imports: [
        CommonModule,
   //     BrowserModule,
        HttpClientModule,
        SpotiRoutingModule ],
    exports: [],
    providers: [SpotifyService],
})
export class SpotiAppModule { }