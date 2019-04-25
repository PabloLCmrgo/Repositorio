import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { SpotifyService } from './services/spotify.service';



@Component({
    selector: 'app-spotiapp-component',
    templateUrl: './spotiapp.component.html'
})
export class SpotiappComponent implements OnInit {
    constructor( spotiapp: SpotifyService ) {
        spotiapp.ValidateUser();
        setInterval(spotiapp.ValidateUser, 3500000);
    }

    ngOnInit(): void { }
}
