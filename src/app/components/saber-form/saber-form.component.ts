import { Component, Input, OnInit } from '@angular/core';
import { Estudiante } from '../../clases/estudiante.model';
import { UniversidadServiceProvider } from '../../services/univserisad.service';
import { Saber } from '../../clases/saber.model';
import { FormsModule } from '@angular/forms';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-saber-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saber-form.component.html',
  styleUrl: './saber-form.component.css'
})
export class SaberFormComponent implements OnInit{
  @Input() idForm:string;
  @Input() pk:number;
  @Input() funcion:string;
  @Input() estudiante:Estudiante;

  //elementos saber pro
  saber_pro:Saber | undefined;

  lectura_pro:number;
  razonamiento_pro:number;
  ingles_pro:number;
  ciudadanas_pro:number;

  //elementos saber 11
  saber_once:Saber | undefined;

  lectura_once:number;
  razonamiento_once:number;
  ingles_once:number;
  ciudadanas_once:number;

  alert = "";
  alertClass="";

  constructor(private univsersidadService:UniversidadServiceProvider){}

  async ngOnInit(){
    if(this.pk !== undefined){
      this.estudiante = await this.univsersidadService.getEstudiante(this.pk);
      this.saber_pro = await this.univsersidadService.getSaberProEst(this.pk);
      this.saber_once = await this.univsersidadService.getSaberOnceEst(this.pk);
    }

    if(this.saber_pro !== undefined){
      this.lectura_pro = this.saber_pro.lectura_critica;
      this.razonamiento_pro = this.saber_pro.razonamiento_cuantitativo;
      this.ingles_pro = this.saber_pro.ingles;
      this.ciudadanas_pro = this.saber_pro.competencias_ciudadanas;
    }

    if(this.saber_once !== undefined){
      this.lectura_once = this.saber_once.lectura_critica;
      this.razonamiento_once = this.saber_once.razonamiento_cuantitativo;
      this.ingles_once = this.saber_once.ingles;
      this.ciudadanas_once = this.saber_once.competencias_ciudadanas;
    }
  }

  async actualizarRegistros(){
    if(this.validarCampos() === true){

      this.alertClass = "alert alert-success w-100 rounded p-1";
      this.alert = "Registro Exitoso";

      await this.registrarPro();
      await this.registrarOnce();

      window.location.reload();
    }else{
      this.alertClass = "alert alert-danger w-100 rounded p-1";
      this.alert = "Faltan Campos por Diligenciar";
    }
  }

  validarCampos(){
    if(this.lectura_pro ===undefined || this.lectura_pro === null || this.lectura_pro < 0 || this.lectura_once === undefined || this.lectura_once === null || this.lectura_once <0){
      return false;
    }
    if(this.razonamiento_pro === undefined || this.razonamiento_pro === null || this.razonamiento_pro <0 || this.razonamiento_once === undefined || this.razonamiento_once === null || this.razonamiento_once <0){
      return false;
    }
    if( this.ingles_pro === undefined || this.ingles_pro === null || this.ingles_pro < 0 || this.ingles_once === undefined || this.ingles_once === null || this.lectura_once < 0){
      return false;
    }
    if(this.ciudadanas_pro === undefined || this.ciudadanas_pro === null || this.ciudadanas_pro < 0 || this.ciudadanas_once === undefined || this.ciudadanas_once === null || this.lectura_once <0){
      return false;
    }
    return true;
  }

  async registrarPro(){
    if(this.saber_pro !== undefined && this.saber_pro !== null){
      await this.univsersidadService.editarSaberPro(this.saber_pro.pk, this.pk, this.lectura_pro, this.razonamiento_pro, this.ingles_pro, this.ciudadanas_pro);
    }else{
      await this.univsersidadService.agregarSaberPro(this.pk, this.lectura_pro, this.razonamiento_pro, this.ingles_pro, this.ciudadanas_pro);
    }
  }

  async registrarOnce(){
    if(this.saber_once !== undefined && this.saber_once !== null){
      await this.univsersidadService.editarSaberOnce(this.saber_once.pk, this.pk, this.lectura_once, this.razonamiento_once, this.ingles_once, this.ciudadanas_once);
    }else{
      await this.univsersidadService.agregarSaberOnce(this.pk, this.lectura_once, this.razonamiento_once, this.ingles_once, this.ciudadanas_once);
    }
  }

  async eliminarRegistros(){
    if(this.validarEliminar() === true){
      if(this.saber_pro !== undefined && this.saber_pro !== null){
        await this.univsersidadService.eliminarSaberPro(this.saber_pro.pk);
      }if(this.saber_once !== undefined && this.saber_once !== null){
        await this.univsersidadService.eliminarSaberOnce(this.saber_once.pk);
      }
      window.location.reload();
    }
  }

  validarEliminar(){
    if((this.saber_pro !== undefined && this.saber_pro !== null) || (this.saber_once !== undefined && this.saber_once !== null)){

      this.alertClass = "alert alert-success w-100 rounded p-1";
      this.alert = "Registro eliminado con Exito";

      return true;
    }

    this.alertClass = "alert alert-danger w-100 rounded p-1";
    this.alert = "No existe Ningun Registro para Eliminar";

    return false;
  }

}
