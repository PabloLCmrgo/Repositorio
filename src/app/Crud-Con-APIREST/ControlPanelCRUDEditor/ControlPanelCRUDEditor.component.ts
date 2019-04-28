import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../crud-con-apirest.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-panel-crudeditor',
  templateUrl: './ControlPanelCRUDEditor.component.html',
  styleUrls: ['./ControlPanelCRUDEditor.component.css']
})
export class ControlPanelCRUDEditorComponent implements OnInit {

  product: any = {};
  modelos:Array<any>=[
                        {codigo:2016, nombre:"2016"},
                        {codigo:2017, nombre:"2017"},
                        {codigo:2018, nombre:"2018"},
                        {codigo:2019, nombre:"2019"},
                        {codigo:2020, nombre:"2020"}
                      ];
  brandlist: any[];
  categorylist: any[];
  readybrand:boolean = false;
  readycategory:boolean = false;
  constructor(private router: ActivatedRoute,
              private route: Router,
              private service: CRUDService) {

  this.ShowBrand();
  this.ShowCategory();
  }

  getProductbyid(product_id: number){

    this.service.getProductbyid(product_id)
        .subscribe( product => {
          console.log(product);
          this.product = product;
        });
   }
  ngOnInit() {
      let inter = setInterval(() => {
        console.log("valida");
          
        console.log(this.readybrand);
        console.log(this.readycategory);
        if(this.readybrand  ==true && this.readycategory ==true){
              clearInterval(inter);
              this.router.params.subscribe(data => {
                if(data['product_id']!='new')
                {
                  this.getProductbyid(data['product_id']);
                }else{
                  this.product={"product_name":"",
                                "brand_id":0,
                                "category_id":0,"model_year":0,
                                "list_price":0.00};
                }
              });
              console.log("Carga producto");
            }
     }, 1000);
  }
  ShowCategory() {

      this.service.getCategory()
      .subscribe( (result) => {
        this.readycategory = true;
        this.categorylist = result;
        console.log(this.categorylist);
            });
    }  
  
    ShowBrand() {
        this.service.getBrand()
        .subscribe( (result) => {
          this.readybrand = true;
          this.brandlist = result;
          console.log(this.brandlist);
               });
      }
  
      guardar( forma: NgForm){   // Se recibe la forma de tipo NgForm para que TS sepa que propiedades y métodos usará
        //console.log("formulario posteado");
        console.log("ngForm", forma);
        console.log("valor forma", forma.value);
        console.log("producto", this.product);
        this.service.saveproduct(this.product)
        .subscribe( (result) => {
        if(result['Result'] == "OK"){
          Swal.fire({
            type: 'success',
            title: 'Aviso',
            text: 'El producto se ha guardado correctamente'
          });
          setTimeout(() => {
          this.route.navigate(['../../Panel'], { relativeTo: this.router } );
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
}
 