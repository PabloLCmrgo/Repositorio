import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService } from '../crud-con-apirest.service';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Source } from 'webpack-sources';
import {MatTableModule} from '@angular/material/table';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-control-panel-crudcomponent',
  templateUrl: './ControlPanelCRUD.component.html',
  styleUrls: ['./ControlPanelCRUD.component.css']
})
export class ControlPanelCRUDComponentComponent implements OnInit {

displayedColumns: string[] = ['product_name', 'list_price', 'model_year', 'brand_id', 'category_id', 'product_id'];
  dataSource = new MatTableDataSource<any>([]);
  brandlist: any[];
  categorylist: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private crudservice: CRUDService,
               private actroute: ActivatedRoute,
               private router: Router ) {

  this.ShowBrand();
  this.ShowCategory();

  }

ngOnInit() {
  this.Showdata();

  }
  loading: boolean;

Showdata() {
  this.loading = true;

    this.crudservice.getProducts()
    .subscribe( (result) => {
      this.dataSource = new MatTableDataSource<any>(result);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }

  ShowBrand() {
    this.loading = true;
  
      this.crudservice.getBrand()
      .subscribe( (result) => {
        this.brandlist = result
        this.loading = false;
        console.log(this.brandlist);
      });
    }

    ShowCategory() {
      this.loading = true;

        this.crudservice.getCategory()
        .subscribe( (result) => {
          this.categorylist = result
          this.loading = false;
          console.log(this.categorylist);
        });
      }  
Editar(id: number){
  this.router.navigate(['../Editor', id], { relativeTo: this.actroute } );
}
Consultar(id: number){
  this.router.navigate(['../Consulta', id], { relativeTo: this.actroute } );
}

Eliminar(id: number){
  
  Swal.fire({
    title: '¿Estás seguro',
    text: "¡No podrás recuperar tu archivo!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, eliminalo!'
  }).then((result) => {
    if (result.value) {
      this.crudservice.deleteproduct(id)
      .subscribe( (result) => {
      if(result['Result'] == "OK"){
        Swal.fire(
          '¡Borrado!',
          'Su archivo, fue eliminado.',
          'success'
        )
        setTimeout(() => {
       // this.router.navigate(['./Panel'], { relativeTo: this.actroute } );
       this.Showdata();
        }, 2000);
      } else{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: result['Message']
        });
      } 
      }); 
    }
  });
}
Nuevo(){
  this.router.navigate(['../Editor', "new"], { relativeTo: this.actroute } );
}
}
