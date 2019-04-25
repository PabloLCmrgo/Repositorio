import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// Componentes
import { CRUDconAPIRESTcomponentComponent } from './crudcon-apirestcomponent.component';
import { ControlPanelCRUDComponentComponent } from './ControlPanelCRUD/ControlPanelCRUD.component';
import { ControlPanelCRUDEditorComponent } from './ControlPanelCRUDEditor/ControlPanelCRUDEditor.component';
import { ControlPanelCRUDConsultaComponent } from './ControlPanelCRUDConsulta/ControlPanelCRUDConsulta.component';

// Rutas
import { CRUDRoutingModule } from './CRUD-routing.module';

// Servicios
import { CRUDService } from './crud-con-apirest.service';

// Angular material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

// Pipes
import { FindNamePipe } from './findname.pipe';

@NgModule({
  declarations: [
    CRUDconAPIRESTcomponentComponent,
    ControlPanelCRUDComponentComponent,
    ControlPanelCRUDEditorComponent,
    ControlPanelCRUDConsultaComponent,
    FindNamePipe
   ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CRUDRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    CRUDService
  ]
})
export class CRUDConAPIRESTModule { }
