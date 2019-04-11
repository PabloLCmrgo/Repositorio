import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ // Cuando se especifica la propiedad providedIn ya no es neceario exponerlo en app.module
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify service Listo');
  }
  
  getQuery(query: string){
      const url = `https://api.spotify.com/v1/${query}`;
  
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQATsV_EP6k84WVQM61_DeBjy9vbkzqdPLksbhbRginmJY4rUdaZfT_0y6QRJNi4fSrXO7OXV7ExF0V4Prw'
      });

      return this.http.get(url, { headers });
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

    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`) 
                .pipe( map( data => data['artists'].items )); // Cuando hay una sola dirección que es el return se puede abreviar          
  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`); 
                // .pipe( map( data => data['artists'].items )); 
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`) 
                .pipe( map( data => data['tracks'])); 
  }
}
