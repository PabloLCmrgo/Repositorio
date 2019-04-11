import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

// Tour de heroes
/*
import { HomeComponent } from './TourDeheroes/components/home/home.component';
import { AboutComponent } from './TourDeheroes/components/about/about.component';
import { BuscadorComponent } from './TourDeheroes/components/buscador/buscador.component';
import { HeroeComponent } from './TourDeheroes/components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './TourDeheroes/components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './TourDeheroes/components/heroes/heroes.component';
import { TourNavbarComponent } from './TourDeheroes/components/shared/navbar/navbar.component';
import { HeroesService } from './TourDeheroes/Service/heroes.service';
import { TourRoutingModule } from './TourDeheroes/tour-routing.module';
// import { TourRouting } from './TourDeheroes/app.routes'; */



// SpotiApp
import { SpotifyService } from './SpotiApp/services/Spotify.service';
import { ArtistaComponent } from './SpotiApp/components/artista/artista.component';
import { SearchComponent } from './SpotiApp/components/search/search.component';
import { LoadingComponent } from './SpotiApp/components/shared/loading/loading.component';
import { TarjetasComponent } from './SpotiApp/components/tarjetas/tarjetas.component';
import { PipesComponent } from './SpotiApp/pipes/pipes.component';
// import { HomeComponent } from './SpotiApp/components/home/home.component';





@NgModule({
  declarations: [
    // Profile
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
        // TourDeHeroes 
    /*    AboutComponent,
        BuscadorComponent,
        HeroeComponent,
        HeroeTarjetaComponent,
        HeroesComponent,
        HomeComponent,
        TourNavbarComponent, */
          // SpotiApp
          ArtistaComponent,
          SearchComponent,
          LoadingComponent,
          TarjetasComponent,
          PipesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    // Profile
    AppRoutingModule//,
      // TourDeHeroes
      // TourRoutingModule,
      // TourRouting
      //TourDeheroesModule
  ],
  providers: [
    // HeroesService,
      SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
