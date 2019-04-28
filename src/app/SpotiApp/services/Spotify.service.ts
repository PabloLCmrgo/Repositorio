import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({ // Cuando se especifica la propiedad providedIn ya no es neceario exponerlo en app.module
  providedIn: 'root'
})
export class SpotifyService {
  apiURL: string = 'https://accounts.spotify.com';
  auth: any;
  headers:any;
  constructor(private http:HttpClient) { 
    console.log('Spotify service Listo');
}

  
  getQuery(query: string){
      const url = `https://api.spotify.com/v1/${query}`;
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.getTokenByLS()
      });
      console.log(this.headers);
      return this.http.get(url, { headers });
    }

    getToken() {
      const url = `http://winco2017-001-site1.dtempurl.com/mod/api/token`;
  
      return this.http.get(url,{});
    }


  getNewReleases(){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwTxbJqPghKdYmQ3IzA4T9QRS0ksfHutompcWmtZtlfRrU9WI7lbeoxz4DIniOACWJ613JuacHykJIH4Y'
    });*/

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => {
                return data['albums'].items;
                }));
  }

  getArtistas(termino: string){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwTxbJqPghKdYmQ3IzA4T9QRS0ksfHutompcWmtZtlfRrU9WI7lbeoxz4DIniOACWJ613JuacHykJIH4Y'
    }); */
    if (!termino)
    return;
    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`) 
                .pipe( map( data => data['artists'].items )); // Cuando hay una sola dirección que es el return se puede abreviar
  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`); 
                //.pipe( map( data => data['artists'].items )); 
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`) 
                .pipe( map( data => data['tracks'])); 
  }


ValidateUser() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8'
  });
  const url = 'http://winco2017-001-site1.dtempurl.com/mod/api/token';
  
return this.http.get(url,{ headers })
.pipe( map( data => {
    console.log(data);
    this.storeToken(data['access_token']);
    data
    //return data;
   //this.storeToken(data.access_token); // storeToken almacen local
  })); 
}

// store token in local storage
storeToken(token: string) {
localStorage.setItem('token', token);
}
// store token in local storage
getTokenByLS() {
    return localStorage.getItem('token');
  }
  
}