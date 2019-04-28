import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private http: HttpClient) {
   }

  getQuery(query: string){
    const url = `http://winco2017-001-site1.dtempurl.com/mod/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQATsV_EP6k84WVQM61_DeBjy9vbkzqdPLksbhbRginmJY4rUdaZfT_0y6QRJNi4fSrXO7OXV7ExF0V4Prw'
    });

    return this.http.get(url, { headers });
  }

getProducts(){
  return this.getQuery('api/products')
              .pipe( map( data => {
              let r = data['Records']; // Record es una prop en data
              return r;
              }));
}

getBrand(){
  return this.getQuery('api/brands')
              .pipe( map( data => {
              let r = data['Records'];
              return r;
              }));
}

getCategory(){
  return this.getQuery('api/categories')
              .pipe( map( data => {
              let r = data['Records'];
              return r;
              }));
}

getProductbyid(product_id: number){

  return this.getQuery(`api/product/${product_id}`)
  .pipe( map( data => {
    let r = data['Record'];
    return r;
    }));
}

saveproduct(product: any){
  const url = `http://winco2017-001-site1.dtempurl.com/mod/api/saveproduct`;

    return this.http.post(url, product)
    .pipe( map( data => {
    return data;
    }));
}

deleteproduct(product_id: number){
  const url = `http://winco2017-001-site1.dtempurl.com/mod/api/product/delete?id=${product_id}`;

    return this.http.post(url, product_id)
    .pipe( map( data => {
    return data;
    }));
}
}
