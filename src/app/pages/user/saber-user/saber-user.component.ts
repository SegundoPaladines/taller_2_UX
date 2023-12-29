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
  }
}
