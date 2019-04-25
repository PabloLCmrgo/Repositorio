import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent} from './components/protegida/protegida.component';
import { AuthComponent } from './auth.component';





const AuthRoutes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
    {
    path: 'Home',
    component: HomeComponent
    },
    {
      path: 'Precios',
      component: PreciosComponent
    },
    {
    path: 'Protegida',
    component: ProtegidaComponent
    },
    {
      path: '',
      redirectTo: 'Home',
      pathMatch: 'full',
    }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
