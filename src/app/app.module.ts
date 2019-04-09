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
import { HomeComponent } from './TourDeheroes/components/home/home.component';
import { AboutComponent } from './TourDeheroes/components/about/about.component';
import { BuscadorComponent } from './TourDeheroes/components/buscador/buscador.component';
import { HeroeComponent } from './TourDeheroes/components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './TourDeheroes/components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './TourDeheroes/components/heroes/heroes.component';
import { HeroesService } from './TourDeheroes/Service/heroes.service';






@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
        AboutComponent,
        BuscadorComponent,
        HeroeComponent,
        HeroeTarjetaComponent,
        HeroesComponent,
        HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
