import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { Programa } from '../../../clases/programa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Facultad } from '../../../clases/facultad.model';
import { EstudiantesUserComponent } from "../estudiantes-user/estudiantes-user.component";

@Component({
  selector: 'app-programas-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, EstudiantesUserComponent],
  templateUrl: './programas-user.component.html',
  styleUrl: './programas-user.component.css',
  providers: [UniversidadServiceProvider]
})
export class ProgramasUserComponent implements OnInit{
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
