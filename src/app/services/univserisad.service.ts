import { Facultad } from '../clases/facultad.model';
import { Injectable, EventEmitter } from "@angular/core";
import { Programa } from '../clases/programa.model';

@Injectable({
  providedIn: 'root',
})

export class UniversidadServiceProvider{

  facultades:Facultad[] = [];

  facultadesActualizadas = new EventEmitter<Facultad []>();
  programasActualizados = new EventEmitter<Programa []>();
  programaActualizado = new EventEmitter<number>();

  async getFacultades(){
    const res = await fetch('http://localhost:9000/facultades');
    const fac = await res.json();
    this.facultades = fac;

    return this.facultades;
  }

  async getFacultad(pk:number){
    const res = await fetch(`http://localhost:9000/facultades/buscar/${pk}`);
    const fac = await res.json();

    return fac;
  }

  async getEstudiante(pk:number){
    const res = await fetch(`http://localhost:9000/estudiantes/buscar/${pk}`);
    const est = await res.json();

    return est;
  }

  async getProgramasFac(pk:number){
    const res = await fetch(`http://localhost:9000/programas/buscar/facultad/${pk}`);
    const prog = await res.json();

    return prog;
  }

  async getPrograma(pk:number){
    const res = await fetch(`http://localhost:9000/programas/buscar/${pk}`);
    const prog = await res.json();

    return prog;
  }

  async getEstudiantesProg(pk:number){
    const res = await fetch(`http://localhost:9000/estudiantes/buscar/programa/${pk}`);
    const est = await res.json();

    return est;
  }

  async getSaberProEst(pk:number){
    const res = await fetch(`http://localhost:9000/saber/pro/buscar/estudiante/${pk}`);
    const saberPro = await res.json();

    if(saberPro === null){
      return undefined;
    }

    return saberPro;
  }

  async getSaberOnceEst(pk:number){
    const res = await fetch(`http://localhost:9000/saber/once/buscar/estudiante/${pk}`);
    const saberOnce = await res.json();

    if(saberOnce === null){
      return undefined;
    }
    return saberOnce;
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

  async agregarPrograma(nombre:string, facultad:number ,logo?:string){
    await fetch('http://localhost:9000/programas/crear',{
      method:'POST',
      body:JSON.stringify({
        nombre:nombre,
        facultad:facultad,
        logo:logo
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    this.programasActualizados.emit(await this.getProgramasFac(facultad));
  }

  async agregarEstudiante(nombre:string, programaPK:number ,foto?:string){
    await fetch('http://localhost:9000/estudiantes/crear',{
      method:'POST',
      body:JSON.stringify({
        nombre:nombre,
        programaPK:programaPK,
        foto:foto
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    this.programaActualizado.emit(programaPK);
  }

  async agregarSaberPro(estudiantePK:number, lectura_critica:number, razonamiento_cuantitativo:number, ingles:number, competencias_ciudadanas:number){
    await fetch('http://localhost:9000/saber/pro/crear',{
      method:'POST',
      body:JSON.stringify({
        estudiantePK:estudiantePK,
        lectura_critica:lectura_critica,
        razonamiento_cuantitativo:razonamiento_cuantitativo,
        ingles:ingles,
        competencias_ciudadanas:competencias_ciudadanas
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    //el emiter ?
  }

  async agregarSaberOnce(estudiantePK:number, lectura_critica:number, razonamiento_cuantitativo:number, ingles:number, competencias_ciudadanas:number){
    await fetch('http://localhost:9000/saber/once/crear',{
      method:'POST',
      body:JSON.stringify({
        estudiantePK:estudiantePK,
        lectura_critica:lectura_critica,
        razonamiento_cuantitativo:razonamiento_cuantitativo,
        ingles:ingles,
        competencias_ciudadanas:competencias_ciudadanas
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    //el emiter ?
  }

  async editarSaberPro(pk:number, estudiantePK:number, lectura_critica:number, razonamiento_cuantitativo:number, ingles:number, competencias_ciudadanas:number){
    await fetch(`http://localhost:9000/saber/pro/actualizar/${pk}`,{
      method:'PUT',
      body:JSON.stringify({
        estudiantePK:estudiantePK,
        lectura_critica:lectura_critica,
        razonamiento_cuantitativo:razonamiento_cuantitativo,
        ingles:ingles,
        competencias_ciudadanas:competencias_ciudadanas
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    //el emiter ?
  }

  async editarSaberOnce(pk:number, estudiantePK:number, lectura_critica:number, razonamiento_cuantitativo:number, ingles:number, competencias_ciudadanas:number){
    await fetch(`http://localhost:9000/saber/once/actualizar/${pk}`,{
      method:'PUT',
      body:JSON.stringify({
        estudiantePK:estudiantePK,
        lectura_critica:lectura_critica,
        razonamiento_cuantitativo:razonamiento_cuantitativo,
        ingles:ingles,
        competencias_ciudadanas:competencias_ciudadanas
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    //el emiter ?
  }

  async editarFacultad(pk:number, nombre:string, logo?:string){
    await fetch(`http://localhost:9000/facultades/actualizar/${pk}`,{
      method:'PUT',
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

  async editarEstudiante(pk:number, programaPK:number, nombre:string, foto?:string){
    await fetch(`http://localhost:9000/estudiantes/actualizar/${pk}`,{
      method:'PUT',
      body:JSON.stringify({
        nombre:nombre,
        foto:foto
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    this.programaActualizado.emit(programaPK);
  }

  async editarPrograma(pk:number, facultad:number, nombre:string, logo?:string){
    await fetch(`http://localhost:9000/programas/actualizar/${pk}`,{
      method:'PUT',
      body:JSON.stringify({
        nombre:nombre,
        logo:logo
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    this.programasActualizados.emit(await this.getProgramasFac(facultad));
  }

  async eliminarFacultad(pk:number){
    await fetch(`http://localhost:9000/facultades/eliminar/${pk}`,{
      method:'DELETE',
    });

    this.facultadesActualizadas.emit(await this.getFacultades());
  }

  async eliminarPrograma(pk:number, facultad:number){
    await fetch(`http://localhost:9000/programas/eliminar/${pk}`,{
      method:'DELETE',
    });

    this.programasActualizados.emit(await this.getProgramasFac(facultad));
  }

  async eliminarEstudiante(pk:number, programaPK:number){
    await fetch(`http://localhost:9000/estudiantes/eliminar/${pk}`,{
      method:'DELETE',
    });

    this.programaActualizado.emit(programaPK);
  }

  async eliminarSaberPro(pk:number){
    await fetch(`http://localhost:9000/saber/pro/eliminar/${pk}`,{
      method:'DELETE',
    });
    //el emiter ?
  }

  async eliminarSaberOnce(pk:number){
    await fetch(`http://localhost:9000/saber/once/eliminar/${pk}`,{
      method:'DELETE',
    });
    //el emiter ?
  }
}
