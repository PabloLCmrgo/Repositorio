import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private auth: AuthService) { // Se hace referencia al servicio inyecyandolo

    auth.handleAuthentication();
   }

  login(){  // Método login que va a llamar al método que está en el servicio
    this.auth.login();
    }
    salir(){
      this.auth.logout();
    }
}
