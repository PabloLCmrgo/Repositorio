import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  toptracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService   ) {

              
    this.loadingArtist = true;

    this.router.params.subscribe( params => {

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
   }

   getArtista(id: string){
    this.loadingArtist = true;

    this.spotify.getArtista(id)
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loadingArtist = false;
        });
   }

   getTopTracks(id: string){

    this.spotify.getTopTracks(id)
        .subscribe(toptracks =>{
          console.log(toptracks);
          this.toptracks = toptracks;
        });
   }
  
}
