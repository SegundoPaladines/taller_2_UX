import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from '../../../clases/estudiante.model';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { Programa } from '../../../clases/programa.model';
import { Saber } from '../../../clases/saber.model';

@Component({
  selector: 'app-saber-user',
  standalone: true,
  imports: [],
  templateUrl: './saber-user.component.html',
  styleUrl: './saber-user.component.css',
  providers:[UniversidadServiceProvider]
})
export class SaberUserComponent implements OnInit{
  estudiantePk:number;
  estudiante:Estudiante|undefined;
  programaPK:number;
  programa:Programa|undefined;
  saberPro:Saber| undefined;
  saberOnce:Saber|undefined;

  //manejo colores
  class_lc = "";
  class_rc = "";
  class_ig = "";
  class_cc = "";

  constructor(private ruta:ActivatedRoute, private universidadService:UniversidadServiceProvider){}

  async ngOnInit(){
    this.ruta.params.subscribe((params) =>{this.estudiantePk = params['prueba']});

    if(this.estudiantePk !== undefined){
      this.estudiante = await this.universidadService.getEstudiante(this.estudiantePk);
      this.programaPK = this.estudiante.programaPK;

      this.saberPro = await this.universidadService.getSaberProEst(this.estudiantePk);

      this.saberOnce = await this.universidadService.getSaberOnceEst(this.estudiantePk);

    }
    if(this.programaPK !== undefined){
      this.programa = await this.universidadService.getPrograma(this.programaPK);
    }

    if(((this.saberPro.lectura_critica/80)*100 - (this.saberOnce.lectura_critica/100)*100) > 0){
      this.class_lc = "badge bg-success text-wrap text-white mb-0";
    }else{
      this.class_lc = "badge bg-danger text-wrap text-white mb-0";
    }

    if(((this.saberPro.razonamiento_cuantitativo/80)*100 - (this.saberOnce.razonamiento_cuantitativo/100)*100) > 0){
      this.class_rc = "badge bg-success text-wrap text-white mb-0";
    }else{
      this.class_rc = "badge bg-danger text-wrap text-white mb-0";
    }

    if(((this.saberPro.ingles/80)*100 - (this.saberOnce.ingles/100)*100) > 0){
      this.class_ig = "badge bg-success text-wrap text-white mb-0";
    }else{
      this.class_ig = "badge bg-danger text-wrap text-white mb-0";
    }

    if(((this.saberPro.competencias_ciudadanas/80)*100 - (this.saberOnce.competencias_ciudadanas/100)*100) > 0){
      this.class_cc = "badge bg-success text-wrap text-white mb-0";
    }else{
      this.class_cc = "badge bg-danger text-wrap text-white mb-0";
    }

  }
  redondearN(numero:number){
    return numero.toFixed(2);
  }
}
