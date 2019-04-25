import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({ // Cuando se especifica la propiedad providedIn ya no es neceario exponerlo en app.module
  providedIn: 'root'
})
export class SpotifyService {
  apiURL: string = 'https://accounts.spotify.com';
  auth: any;

  constructor(private http:HttpClient) { 
    console.log('Spotify service Listo');
   //this.storeToken("BQAQj0s6L5gRoCCrm9S2wotZJ85lY1oHA9ImMx6woJQ50KOjlLMWvNdBxmQ1HXLdEL24JaFY__5uDvXKSe8");
  }
  
  getQuery(query: string){
      const url = `https://api.spotify.com/v1/${query}`;
  
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.getTokenByLS()
      });

      return this.http.get(url, { headers });
    }

    getToken() {
      const url = `https://zipco.mx/mod/api/token`;
  
      return this.http.get(url, { });
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
  return this.getToken() 
  .pipe( map( (data:any) => {
   console.log(data);
   this.storeToken(data.access_token); 
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