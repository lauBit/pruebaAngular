import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HttpClientService } from '../../services/http-client.service'

@Component({
  selector: 'app-menu-registro',
  templateUrl: './menu-registro.component.html',
  styleUrls: ['./menu-registro.component.css'],
  providers: [HttpClientService]
})
export class MenuRegistroComponent implements OnInit {
  public usuario: Usuario;
  public datos1 : String;
  
  showAge;
  
  
  constructor(
    private _httpClientService: HttpClientService
  ) {
    this.usuario = new Usuario("","",null,null);
  }

  ngOnInit() {
  }

  signIn() {
    this._httpClientService.obtener().subscribe(
      (response: any) => {
        console.log(response)
      }, err => {
        console.log(err)
      }
    );
  }

  registrar(usuario){
    const convertAge = new Date(this.usuario.birthdate);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    if (this.showAge >= 18) {
      this._httpClientService.registrar(usuario).subscribe(
        (response: any) => {
          console.log(response)
          alert("Usuario registrado correctamente")
        }, err => {
          console.log(err)
          alert("Hubo un error inesperado, intentalo de nuevo")
        }
      );
    } else {
      alert("Sólo te puedes registrar si eres mayor de 18 años")
    }
  }
} 