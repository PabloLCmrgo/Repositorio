import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDconAPIRESTcomponentComponent } from './crudcon-apirestcomponent.component';
import { ControlPanelCRUDComponentComponent } from './ControlPanelCRUD/ControlPanelCRUD.component';
import { ControlPanelCRUDConsultaComponent } from './ControlPanelCRUDConsulta/ControlPanelCRUDConsulta.component';
import { ControlPanelCRUDEditorComponent } from './ControlPanelCRUDEditor/ControlPanelCRUDEditor.component';

const CRUDRoutes: Routes = [{
    path: '',
    component: CRUDconAPIRESTcomponentComponent,
    children: [
    {
    path: 'Panel',
    component: ControlPanelCRUDComponentComponent
    },
    {
      path: 'Consulta/:product_id',
      component: ControlPanelCRUDConsultaComponent
    },
    {
    path: 'Editor/:product_id',
    component: ControlPanelCRUDEditorComponent
    },
    {
      path: '',
      redirectTo: 'Panel',
      pathMatch: 'full',
    }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(CRUDRoutes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
