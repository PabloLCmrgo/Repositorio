import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { SpotifyService } from './services/spotify.service';



@Component({
    selector: 'app-spotiapp-component',
    templateUrl: './spotiapp.component.html'
})
export class SpotiappComponent implements OnInit {
    constructor( spotiapp: SpotifyService ) {
        spotiapp.ValidateUser()
        .subscribe( (result) => {
            console.log('ValidateUser response');
        });
        setInterval(() => {
            spotiapp.ValidateUser()
            .subscribe( (result) => {
                console.log('ValidateUser response');
            });
              }, 30000 );
        
    }

    ngOnInit(): void { }
}
