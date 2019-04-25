import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Rutas
import { AuthRoutingModule } from './auth-routing.module';


// Componentes
import { AuthComponent } from './auth.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// servicios
import { AuthService } from './services/auth.service';


@NgModule({
    declarations: [
        AuthComponent,
        HomeComponent,
        PreciosComponent,
        ProtegidaComponent],
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule ],
    exports: [],
    providers: [AuthService],
})
export class AuthModule {}