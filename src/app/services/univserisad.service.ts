import { Facultad } from "../clases/facultad.model";
import { EventEmitter } from "@angular/core";

export class UniversidadServiceProvider{

  facultades:Facultad[] = [];

  facultadesActualizadas = new EventEmitter<Facultad []>();

  async getFacultades(){
    const res = await fetch('http://localhost:9000/facultades');
    const fac = await res.json();
    this.facultades = fac;

    return this.facultades;
  }

  async agregarFacultad(nombre:string, logo?:string){
    await fetch('http://localhost:9000/facultades/crear',{
      method:'POST',
      body:JSON.stringify({
        nombre:nombre,
        logo:logo
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    this.facultadesActualizadas.emit(await this.getFacultades());
  }
}
