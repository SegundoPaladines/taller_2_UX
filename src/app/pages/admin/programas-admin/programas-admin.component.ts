import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { Programa } from '../../../clases/programa.model';
import { FormsModule } from '@angular/forms';
import { ProgFormComponent } from "../../../components/prog-form/prog-form.component";
import { CommonModule } from '@angular/common';
import { Facultad } from '../../../clases/facultad.model';
import { EstudiantesAdminComponent } from "../estudiantes-admin/estudiantes-admin.component";

@Component({
    selector: 'app-programas-admin',
    standalone: true,
    templateUrl: './programas-admin.component.html',
    styleUrl: './programas-admin.component.css',
    providers: [UniversidadServiceProvider],
    imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, ProgFormComponent, EstudiantesAdminComponent]
})
export class ProgramasAdminComponent implements OnInit{

  fac:Facultad;
  facPK:number;
  programaPK:number | undefined;
  programas:Programa[] = [];

  idForm = "";

  constructor(private route:ActivatedRoute, private universidadService: UniversidadServiceProvider){}

  async ngOnInit(){
    this.route.params.subscribe(params => this.facPK = params['facultad']);
    this.programas = await this.universidadService.getProgramasFac(this.facPK);
    this.universidadService.programasActualizados.subscribe((programas:Programa[])=>{
      this.programas = programas;
    });
    if(this.programas.length > 0){
      this.programaPK = this.programas[0].pk;
      this.idForm = this.programaPK+"Form";
    }
    this.fac = await this.universidadService.getFacultad(this.facPK);
    this.actualizarLista();
  }

  actualizarLista(){
    this.idForm = this.programaPK+"FormPrograma";
    this.universidadService.programaActualizado.emit(this.programaPK);
  }

}
