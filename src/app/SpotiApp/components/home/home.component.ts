import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevascanciones: any[] = [];
  loading: boolean;
  error: boolean;

  constructor(private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data) => {
        this.nuevascanciones = data;

      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
      });
   }


}
