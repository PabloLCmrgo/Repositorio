import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../crud-con-apirest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FindNamePipe } from '../findname.pipe';

@Component({
  selector: 'app-control-panel-crudabc',
  templateUrl: './ControlPanelCRUDConsulta.component.html',
  styleUrls: ['./ControlPanelCRUDConsulta.component.css']
})
export class ControlPanelCRUDConsultaComponent implements OnInit {
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
      
}
