import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: "Juan", nombre: 'Manuel', apellido: "monroy", sexo: 'Masculino' },
    { usuario: "Jose", nombre: 'Aurelio', apellido: "garcia", sexo: 'Masculino' },
    { usuario: "Armando", nombre: 'Estefany', apellido: "monroy", sexo: 'Femenino' },
    { usuario: "Caliche", nombre: 'Manuel', apellido: "rrr", sexo: 'Masculino' },
    { usuario: "Marcos", nombre: 'Manuel', apellido: "monroy", sexo: 'Femenino' },
  ];

  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuarios(index: number) {
    this.listUsuarios.splice(index, 1);
  }
}
